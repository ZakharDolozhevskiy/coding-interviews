// Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as
// A^P where P > 1 and A > 0. A and P both should be integers.
//
// Input : 4
// Output : True
// as 2^2 = 4.

const isPower = n => {
  let a, b, result;

  if (n === 1)
    return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    a = i;
    b = 2;
    result = Math.pow(a, b);

    while (result <= n && result > 0) {
      if (result === n)
        return true;
      b++;
      result = Math.pow(a, b);
    }
  }

  return false;
};
