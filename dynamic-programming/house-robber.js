// You are a professional robber planning to rob houses along a street. Each house has a certain amount
// of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses
// have security system connected and it will automatically contact the police if two adjacent houses were
// broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the
// maximum amount of money you can rob tonight without alerting the police.

const rob = (nums) => {
  let lastIdx = null;
  let prevSum = 0;
  let currentSum = 0;

  let temp;

  for (let i = 0; i < nums.length; i++) {
    if (lastIdx !== i - 1) {
      lastIdx = i;
      prevSum = currentSum;
      currentSum += nums[i];
    }
    else if (prevSum + nums[i] > currentSum) {
      lastIdx = i;
      temp = currentSum;
      currentSum = prevSum + nums[i];
      prevSum = temp;
    }
  }

  return currentSum;
};

let rob2 = n => {
  let prevNo = 0;
  let prevYes = 0;
  let reminder;

  for (let i = 0; i < n.length; i++) {
    reminder = prevNo;
    prevNo = Math.max(prevNo, prevYes);
    prevYes = n[i] + temp;
  }

  return Math.max(prevYes, prevNo);
};
