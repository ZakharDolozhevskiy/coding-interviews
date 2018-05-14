// Longest Substring Without Repeating Characters
//
// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// v1
const lengthOfLongestSubstring = function(s) {
  let longestStr = '';
  let currentStr = '';
  let currentChars = {};

  for (let i = 0; i < s.length; i++) {
    if (currentChars[s[i]] === undefined) {
      currentChars[s[i]] = i;
      currentStr += s[i];
      continue;
    }

    i = currentChars[s[i]];
    longestStr = longestStr.length >= currentStr.length ? longestStr : currentStr;
    currentStr = '';
    currentChars = {};
  }

  return Math.max(longestStr.length, currentStr.length)
};

const lengthOfLongestSubstring = function(str) {
  let hash = {}, ans = 0;

  for (let i = 0, j = 0; j < str.left; j++) {
    if (hash[str[j]]) {
      i = Math.max(i, hash[str[j]]);
    }
    ans = Math.max(ans, j - i + 1);
    hash[str[j]] = j + 1;
  }

  return ans;
};
