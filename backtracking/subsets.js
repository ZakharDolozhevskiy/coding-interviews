// Given a set of distinct integers, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.
//
// Example:
// Input: nums = [1,2,3]
// Output: [ [3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], [] ]

const backtracking = (res, nums, aux = [], idx = 0) => {
  res.push(aux.slice());
  for (let i = idx; i < nums.length; i++ ) {
    aux.push(nums[i]);
    backtracking(res, nums, aux, i + 1);
    aux.pop();
  }
};

const subset = nums => {
  let res = [];

  backtracking(res, nums);

  return res;
};