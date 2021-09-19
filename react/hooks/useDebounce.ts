function debounce(f, wait) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait)
  }
}

type Fn = (...any) => any

export function useDebounce<T extends Fn>(fn: T, await: number) {
  
}
