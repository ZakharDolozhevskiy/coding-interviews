// Detect data type in JavaScript
// https://bigfrontend.dev/problem/detect-data-type-in-JavaScript
function detectType(data) {
  const type = Object.prototype.toString.call(data).slice(8, -1)
  if (type === 'FileReader') return 'object';
  return type.toLowerCase();
}