// Create a tokenizer
// https://bigfrontend.dev/problem/create-a-tokenizer
function* tokenize(str) {
  let tokens = str.match(/(\d+)|[\+\-\*\/\(\)]/g)
  for (var token of tokens) { yield token }
}