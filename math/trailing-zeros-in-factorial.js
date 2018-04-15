// Given an integer n, return the number of trailing zeroes in n!.
//
// Note: Your solution should be in logarithmic time complexity.

const trailingZeroes = n => {
  let count = 0;

  for (let i = 5; n / i >= 1; i *= 5) {
    count += n / i ^ 0;
  }

  return count;
};
