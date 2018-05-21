// Find all possible combinations of k numbers that add up to a number n, given that only numbers
// from 1 to 9 can be used and each combination should be a unique set of numbers.
//
// Note:
// - All numbers will be positive integers.
// - The solution set must not contain duplicate combinations.
//
// Input: k = 3, n = 7 Output: [[1,2,4]]
// Input: k = 3, n = 9 Output: [[1,2,6], [1,3,5], [2,3,4]]

const combinationSum3 = (k, n) => {
  const combinations = [];

  if (k > 0 && n > 0)
    backtracking(combinations, k, n);

  return combinations;
};

const backtracking = (comb, k, n, aux = [], idx = 1, sum = 0) => {
  if (aux.length === k && sum === n)
    comb.push(aux.slice());
  else
    for (let i = idx; i <= 9; i++) {
      if (i + sum > n) continue;
      aux.push(i);
      backtracking(comb, k, n, aux, i + 1, i + sum);
      aux.pop();
    }
};
