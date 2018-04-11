// Given an integer array, find if an integer p exists in the array such that the number of integers
// greater than p in the array equals to p
// If such an integer is found return 1 else return -1.
// [ 1, 2, 7, 0, 9, 3, 6, 0, 6 ] => -1

const solve = array => {
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1])
      continue;

    if (array[i] === array.length - i - 1)
      return 1;
  }

  return -1;
};
