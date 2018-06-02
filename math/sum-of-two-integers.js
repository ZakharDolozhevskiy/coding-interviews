// Sum of Two Integers
// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example: Given a = 1 and b = 2, return 3.

const getSum = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  let rest;

  while (b !== 0) {
    rest = a & b;
    a = a ^ b;
    b = rest << 1;
  }

  return a;
};