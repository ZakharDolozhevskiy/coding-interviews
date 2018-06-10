// Palindromic Substrings

// Given a string, your task is to count how many palindromic substrings in this string.
// The substrings with different start indexes or end indexes are counted as different substrings
// even they consist of same characters.

// Input: "abc" Output: 3 Explanation: Three palindromic strings: "a", "b", "c".
// Input: "aaa" Output: 6 Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

const countSubstrings = function(s) {
  let dp = [];
  let size = s.length;
  let count = 0;

  for (let i = size - 1; i >= 0; i--) {
    dp = new Array(size).fill(true);

    for (let j = i; j < size; j++) {
      dp[i][j] = s[i] === s[j] && j - i < 3 || s[i + 1][j - 1];
      dp[i][j] && count++;
    }
  }

  return count;
};
