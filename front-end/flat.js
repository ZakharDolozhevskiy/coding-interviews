// implement Array.prototype.flat()
// https://bigfrontend.dev/problem/implement-Array-prototype.flat
function flat(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth > 0) {
      return [...acc, ...flat(item, depth - 1)]
    } else {
      return [...acc, item]
    }
  }, [])
}