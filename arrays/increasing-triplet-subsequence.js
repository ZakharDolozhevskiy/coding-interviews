// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
//
// Formally the function should:
// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
//
// Your algorithm should run in O(n) time complexity and O(1) space complexity.

const increasingTriplet = nums => {
  let first = Infinity, second = Infinity;

  for (let num of nums) {
    if (num <= first) first = num;
    else if (num <= second) second = num;
    else return true;
  }

  return false;
};