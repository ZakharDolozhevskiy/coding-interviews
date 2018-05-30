// Fraction to Recurring Decimal
// Given two integers representing the numerator and denominator of a fraction,return the fraction
// in string format. If the fractional part is repeating, enclose the repeating part in parentheses.
//
// Input: numerator = 1, denominator = 2
// Output: "0.5"
//
// Input: numerator = 2, denominator = 1
// Output: "2"
//
// Input: numerator = 2, denominator = 3
// Output: "0.(6)"

const fractionToDecimal = (numerator, denominator) => {
  if (numerator === 0) return '0';

  let result = '', map = {};

  result += (numerator < 0) ^ (denominator < 0) ? '-' : '';

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  result += Math.floor(numerator / denominator);

  if (numerator % denominator === 0) return result;

  result += '.';

  for (let r = numerator % denominator; r; r %= denominator) {
    if (map[r]) {
      result = result.slice(0, map[r]) + `(${result.slice(map[r])})`;
      break;
    }

    map[r] = result.length;
    r *= 10;
    result += (r / denominator ^ 0);
  }

  return result;
};
