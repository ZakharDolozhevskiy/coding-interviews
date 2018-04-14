// Determine whether an integer is a palindrome. Do this without extra space.
//
// A palindrome integer is an integer x for which reverse(x) = x where reverse(x) is x with its digit reversed.
// Negative numbers are not palindromic.
//
// Input : 12121
// Output : True
//
// Input : 123
// Output : False

const isPalindrome = n => {
  let input = n;
  let result = 0;

  while (input > 0) {
    result = (result * 10) + input % 10;
    input = input / 10 ^ 0;
  }

  return result === n;
};