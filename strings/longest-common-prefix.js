// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Input: ["flower","flow","flight"] Output: "fl"
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  if (!strs.length || strs[0] === '') return '';

  let min = strs.reduce((acc, str) => Math.min(acc, str.length), Infinity);
  let start = 0;
  let end = min - 1;
  let mid;

  while (start <= end) {
    mid = (start + end) / 2 ^ 0;
    if (hasCommonPrefix(strs, mid)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return strs[0].slice(0, end);
};

const hasCommonPrefix = (strs, pos) => {
  let toCompare = strs[0].slice(0, pos);

  for (let i = 1; i < strs.length; i++)
    if (!strs[i].startsWith(toCompare))
      return false;

  return true;
};

console.log(
  longestCommonPrefix(["flower","flow","flight"])
);