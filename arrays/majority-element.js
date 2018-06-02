// Majority Element
// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

const majorityElement = function(nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += (candidate === num) ? 1 : -1;
  }

  return candidate;
};
