import { useState, useRef, useEffect } from 'react'

function debounce(f, wait) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait)
  }
}

// export function useDebounce<T extends Fn>(fn: T, await: number) {}

interface DebounceOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
}
type Fn = (...any) => any

function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn)
  fnRef.current = fn

  const persistFn = useRef<T>()
  if (!persistFn.current) {
    persistFn.current = function (...args) {
      return fnRef.current!.apply(this, args)
    } as T
  }

  return persistFn.current!
}

type noop = (...args: any[]) => any

function isFunction(obj: any): obj is Function {
  return typeof obj === 'function'
}

const useUnmount = (fn: any) => {
  const fnPersist = usePersistFn(fn)

  useEffect(
    () => () => {
      if (isFunction(fnPersist)) {
        fnPersist()
      }
    },
    []
  )
}

function useCreation<T>(factory: () => T, deps: any[]) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false
  })
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps
    current.obj = factory()
    current.initialized = true
  }
  return current.obj as T
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== deps[i]) return false
  }
  return true
}

function useDebounceFn<T extends Fn>(fn: T, options?: DebounceOptions) {
  const fnRef = useRef<T>(fn)
  fnRef.current = fn

  const wait = options?.wait ?? 1000

  const debounced = useCreation(
    () =>
      debounce<T>(
        ((...args: any[]) => {
          return fnRef.current(...args)
        }) as T,
        wait,
        options
      ),
    []
  )

  useUnmount(() => {
    debounced.cancel()
  })

  return {
    run: debounced as unknown as T,
    cancel: debounced.cancel,
    flush: debounced.flush
  }
}

function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useState(value)

  const { run } = useDebounceFn(() => {
    setDebounced(value)
  }, options)

  useEffect(() => {
    run()
  }, [value])

  return debounced
}
