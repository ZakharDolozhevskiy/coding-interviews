// Given a string that consists of only uppercase English letters, you can replace any letter in the
// string with another letter at most k times. Find the length of a longest substring containing all
// repeating letters you can get after performing the above operations.

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB"
// has the longest r
// epeating letters, which is 4.

const characterReplacement = (str, k) => {
  let counts = new Array(26).fill(0);
  let maxCount = 0; // кол-во одинаковых символов
  let seqCount = 0; // результат

  let start = 0, end = 0;

  for (end; end < str.length; end++) {

    maxCount = Math.max(
      ++counts[ str[end].charCodeAt(0) - 65 ],
      maxCount);

    while (end - start - maxCount + 1 > k) {
      counts[ str[start].charCodeAt(0) - 65 ] -= 1;
      start++;
      counts.forEach(count => maxCount = Math.max(count, maxCount));
    }

    seqCount = Math.max(end - start + 1, seqCount);
  }

  return seqCount;
};

console.log(characterReplacement("BAAA",0));