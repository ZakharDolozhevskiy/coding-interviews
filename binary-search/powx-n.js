// Implement pow(x, n), which calculates x raised to the power n (xn).
// Input: 2.00000, 10 | 2.10000, 3 | 2.00000, -2
// Output: 1024.00000 | 9.26100    | 0.25000

const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === -1) return 1 / x;

  if (n % 2 === 0) {
    var m = myPow(x, n / 2);
    return m * m;
  } else {
    return x * myPow(x, n - 1);
  }
};

const myPowBinary = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  let result = 1;

  while (n > 0) {
    if (n & 1) result *= x;
    x *= x;
    n >>= 1;
  }

  return result;
};