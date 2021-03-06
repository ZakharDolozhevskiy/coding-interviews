// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
// For example:
// Given the array [-2,1,-3,4,-1,2,1,-5,4], the contiguous subarray [4,-1,2,1] has the largest sum = 6.
//
// For this problem, return the maximum sum.

const maxSubArray = array => {
  let sum = -Infinity, maxSum = -Infinity;

  array.forEach(function (num) {
    sum = Math.max(sum + num, num);
    maxSum = Math.max(maxSum, sum);
  });

  return maxSum;
};