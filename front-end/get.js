// _.get()
// https://bigfrontend.dev/problem/implement-lodash-get/discuss
function get(source, path, defaultValue = undefined) {
  if (!path) { return }

  if (typeof path === 'string') {
    path = parsePath(path)
    console.log(path)
  }

  let chunk = path.shift()

  if (source[chunk] === undefined) return defaultValue

  return path.length === 0
    ? source[chunk]
    : get(source[chunk], path, defaultValue)
}

function parsePath(path) {
  return path.replaceAll('[', '.').replaceAll(']', '').split('.')
}