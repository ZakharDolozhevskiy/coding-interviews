// House Robber II
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security
// system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine
// the maximum amount of money you can rob tonight without alerting the police.

const helper = (nums, lo, hi) => {
  let include = 0;
  let exclude = 0;
  let reminder;

  for (let i = lo; i < hi; i++) {
    reminder = exclude;
    exclude = Math.max(exclude, include);
    include = reminder + nums[i];
  }

  return Math.max(include, exclude);
};

const rob = nums => nums.length > 1
  ? Math.max(
    helper(nums, 0, nums.length - 1),
    helper(nums, 1, nums.length)
  ) : nums[0] || 0;
