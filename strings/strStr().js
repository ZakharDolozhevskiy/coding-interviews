// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

const strStr = function(haystack, needle) {
  if (needle === '') return 0;

  let ln = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    console.log(i, i + ln);
    if (haystack.slice(i, i + ln) === needle)
      return i;
  }

  return -1;
};
