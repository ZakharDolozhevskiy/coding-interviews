// Implement atoi which converts a string to an integer.
// The function first discards as many whitespace characters as necessary until the first non-whitespace
// character is found. Then, starting from this character, takes an optional initial plus or minus sign
// followed by as many numerical digits as possible, and interprets them as a numerical value.
//
// The string can contain additional characters after those that form the integral number, which are
// ignored and have no effect on the behavior of this function.
//
// If the first sequence of non-whitespace characters in str is not a valid integral number,
// or if no such sequence exists because either str is empty or it contains only whitespace characters,
// no conversion is performed.
//
// If no valid conversion could be performed, a zero value is returned.
//
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit
// signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable
// values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

const myAtoi = (str) => {
  if (!str.length) return 0;

  let i = 0;
  let rank = 1;
  let result = '';
  let pattern = /[0-9\/+\/-]/;

  for (i; i < str.length; i++) {
    if (str[i] === ' ') continue;
    if (!pattern.test(str[i])) return 0;
    else break;
  }

  if (str[i] === '-') {
    rank = -1; i++;
  }

  for (i; i < str.length; i++) {
    if (pattern.test(str[i]))
      result = result + str[i];
  }

  return result.length ? result * rank : 0;
};

console.log(myAtoi('42'));