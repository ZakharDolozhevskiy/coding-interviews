// Reverse digits of an integer.
// Example1: x = 123, return 321
// Example2: x = -123, return -321
// Return 0 if the result overflows and does not fit in a 32 bit signed integer

// Tips:
//
// 1) num % 10 gives you the last digit of a number.
//
// 2) num / 10 ^ 0 gives you the number after removing the last digit.
//
// 3) num * 10 + digit appends the digit at the end of the number.
//
// 4) 32 bit signed integer -> int <= 0x7FFFFFFF

const reverse = n => {
  let result = 0;
  let num = Math.abs(n);
  let rank = n > 0 ? 1 : -1;

  while (num > 0) {
    result = (result * 10) + (num % 10);
    num = num / 10 ^ 0;
  }

  return result <= 0x7FFFFFFF ? result * rank : 0;
};
