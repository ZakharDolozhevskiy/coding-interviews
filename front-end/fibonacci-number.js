// Generate Fibonacci Number
// https://bigfrontend.dev/problem/fibonacci-number/discuss

const memo = {}

function fib(n) {
  if (n <= 1) return n
  if (memo[n]) return memo[n]
  return memo[n] = fib(n - 1) + fib(n - 2)
}

function fib(n) {
  if (n <= 1) return n

  let a = 0, b = 1, s = 0

  n = n - 1

  while (n--) {
    s = a + b
    a = b
    b = s
  }

  return s
}