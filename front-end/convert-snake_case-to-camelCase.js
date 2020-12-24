// Convert snake_case to camelCase
// https://bigfrontend.dev/problem/convert-snake_case-to-camelCase/discuss
function snakeToCamel(str) {
  return str.replaceAll(/([a-zA-Z0-9])_([a-zA-Z0-9])/g, function(_, p1, p2) {
     return p1 + p2.toUpperCase()
  })
}