import { useRef } from 'react'

export type compareFunc<T> = (prev: T, cur: T) => boolean

function usePrevious<T>(state: T, compare?: compareFunc<T>): T | undefined {
  const prevRef = useRef<T>()
  const curRef = useRef<T>()

  const needUpdate =
    typeof compare === 'function' ? compare(prevRef.current, state) : true
  if (needUpdate) {
    prevRef.current = curRef.current
    curRef.current = state
  }

  return prevRef
}

export default usePrevious