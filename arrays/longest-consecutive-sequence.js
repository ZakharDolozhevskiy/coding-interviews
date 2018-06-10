// Longest Consecutive Sequence
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// Your algorithm should run in O(n) complexity.

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const longestConsecutive = (nums) => {
  let map = {};
  let max = 0;
  let current = 0;

  nums.forEach(num => map[num] = true);
  nums.forEach(num => {
    if (map[num - 1] === undefined) {
      current = 1;

      while (map[num + 1]) {
        current++;
        num++;
      }

      max = Math.max(max, current);
    }
  });

  return Math.max(max, current);
};