// Given a read only array of n + 1 integers between 1 and n, find one number that repeats in linear
// time using less than O(n) space and traversing the stream sequentially O(1) times.
// Sample Input: [3 4 1 4 1] Sample Output: 1

const repeatedNumber = input => {
  let pointer;

  for (let i = 0; i < input.length; i++) {
    pointer = Math.abs(input[i]);

    if (input[pointer] < 0)
      return Math.abs(input[i]);
    else
      input[pointer] = input[pointer] * -1;
  }

  return -1;
};
