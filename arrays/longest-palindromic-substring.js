// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

const longestPalindrome = s => {
  let max = s[0];
  let tmp = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] && s[i + 1] && s[i - 1] === s[i + 1]) {
      tmp = getPalindromicSubstring(s, i, i);
      max = tmp.length > max.length ? tmp : max;
    }

    if (s[i + 1] && s[i] === s[i + 1]) {
      tmp = getPalindromicSubstring(s, i, i + 1);
      max = tmp.length > max.length ? tmp : max;
    }
  }

  return max;
};

const getPalindromicSubstring = (s, i, j) => {
  let r = s.slice(i, j + 1);

  while (--i >= 0 && ++j <= s.length - 1)
    if (s[i] && s[j] && s[i] === s[j])
      r = s[i] + r + s[j];
    else
      break;

  return r;
};
