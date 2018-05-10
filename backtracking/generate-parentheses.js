// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

let generateParenthesis = function(n) {
  let res = [];
  backtracking(res, n);
  return res;
};

let backtracking = (res, max, aux = '', open = 0, close = 0) => {
  if (aux.length === max * 2) res.push(aux);
  else {
    if (open < max)
      backtracking(res, max, aux + '(', open + 1, close);
    if (close < open)
      backtracking(res, max, aux + ')', open, close + 1);
  }
};