// Given a non-negative number represented as an array of digits,
// add 1 to the number ( increment the number represented by the digits ).
// The digits are stored such that the most significant digit is at the head of the list.
//
// Example:
// If the vector has [1, 2, 3] the returned vector should be [1, 2, 4]
// as 123 + 1 = 124.
//

function addOne(array) {
  while (array[0] === 0)
    array.shift();

  let carry = 1;
  let end = array.length - 1;

  while (end >= 0 && carry) {
    array[end] = array[end] + carry;
    array[end] = array[end] < 10 ? array[end] : 0;
    carry = array[end] ? 0 : 1;
    --end;
  }

  if (carry) array.unshift(carry);

  return array;
}
