// Given a string, find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.
//
// Examples: s = "leetcode" => 0, s = "loveleetcode" => 2
//

const firstUniqChar = function(s) {
  let chars = {};

  for (let char of s)
    chars[char] = chars[char] ? ++chars[char] : 1;

  for (let i = 0; i < s.length; i++)
    if (chars[s[i]] === 1) return i;

  return -1;
};
