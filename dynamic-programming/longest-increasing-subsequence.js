// Given an unsorted array of integers, find the length of longest increasing subsequence.
//
// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
// Note that there may be more than one LIS combination, it is only necessary for you to return the length.

const getLongestSubsequence = array => {
  let max = 0;
  let current;
  let sequence = [];

  array.forEach((num, i) => {
    sequence[i] = 1;
    current = 0;

    for (let j = i; j >= 0; j--) {
      if (array[j] < num)
        current = Math.max(current, sequence[j]);
    }

    sequence[i] += current;
    max = Math.max(sequence[i], max);
  });

  return max;
};
