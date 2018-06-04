// Combination Sum IV
//
// Given an integer array with all positive numbers and no duplicates, find the number of possible
// combinations that add up to a positive integer target.

const combinationSum4 = (nums, target) => {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++)
    for (let num of nums)
      if (i >= num) dp[i] += dp[i - num];

  return dp[target];
};