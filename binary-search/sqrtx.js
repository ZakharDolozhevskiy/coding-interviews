// Implement int sqrt(int x).
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

const sqrt = (a, x = 1) => {
  let y = 1/2 * (x + a/x);
  return y === x ? x ^ 0 : sqrt(a, y);
};

console.log(sqrt(4)); // 2
console.log(sqrt(8)); // 2
console.log(sqrt(25)); // 5

// Итерационная формула Герона
// Xn = 1/2 (Xn-1 + A / Xn-1)
// где Xn произвольное число A числов для вычисления квадратного корня
// когда Xn === Xn - 1 вернуть Xn
