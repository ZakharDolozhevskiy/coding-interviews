// Implement a general memoization function - `memo()`
// https://bigfrontend.dev/problem/implement-general-memoization-function
function memo(func, resolver) {
  const cache = new Map()
  const context = this

  return function(...args) {
    const key = resolver ? resolver(...args) : args.join('_')
    const res = cache.has(key) ? cache.get(key) : func.apply(this, args)
    cache.set(key, res)
    return res
  }
}