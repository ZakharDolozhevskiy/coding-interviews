// Given a collection of distinct integers, return all possible permutations.
// Input: [1,2,3]
// Output:[ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]

const permute = (nums) => {
  const aux = [];
  const res = [];

  backtracking(res, aux, nums);

  return res;
};

const backtracking = (res, aux, nums) => {
  if (aux.length === nums.length)
    res.push(aux.slice());
  else
    for (let i = 0; i < nums.length; i++) {
      if (aux.indexOf(nums[i]) >= 0) continue;
      aux.push(nums[i]);
      backtracking(res, aux, nums);
      aux.pop();
    }
};