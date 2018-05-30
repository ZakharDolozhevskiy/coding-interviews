// Divide Two Integers
// Given two integers dividend and divisor, divide two integers without using multiplication,
// division and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero.

const divide = (dvd, dvs) => {
  if (!dvd || dvd === -2147483648 && dvs === -1)
    return 2147483647;

  dvd = Math.abs(dvd);
  dvs = Math.abs(dvs);

  let res = 0;
  let sign = ((dvs < 0) ^ (dvd < 0)) ? -1 : 1;
  let count, temp;

  while (dvd >= dvs) {
    count = 1;
    temp = dvs;

    while (dvd >= (temp << 1)) {
      temp <<= 1;
      count <<= 1;
    }

    dvd -= temp;
    res += count;
  }

  return sign === 1 ? res : -res;
};