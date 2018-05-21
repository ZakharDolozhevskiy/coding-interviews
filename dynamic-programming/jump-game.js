// Jump Game
//
// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
//
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
//
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
// jump length is 0, which makes it impossible to reach the last index.

const canJump = nums => {
  if (!nums)
    return false;

  let dp = [1];

  for (let i = 0; i < nums.length - 1; i++) {
    if (dp[i]) {
      let steps = nums[i];
      while (steps > 0) dp[i + steps--] = 1;
    }
  }
  return !!dp[nums.length - 1];
};