// Given an array of strings, group anagrams together.
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// All inputs will be in lowercase.
// The order of your output does not matter.

let groupAnagrams = function(strs) {
  let offset = 96;
  let map = {};
  let res = [];
  let key, idx;

  strs.forEach((str) => {
    key = [];

    for (let char of str) {
      idx = char.charCodeAt(0) - offset;
      key[idx] = key[idx] ? key[idx] + 1 : 1;
    }

    if (map[key]) map[key].push(str);
    else map[key] = [str];
  });

  for (let key in map) res.push(map[key]);

  return res;
};
