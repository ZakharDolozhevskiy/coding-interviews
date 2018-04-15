// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB

const convertToTitle = n => {
  let str = '';
  let offset = 64;
  let reminder;

  while (n > 0) {
    reminder = (n % 26) || 26;
    str = String.fromCharCode(reminder + offset) + str;
    n -= reminder;
    n /= 26;
  }

  return str;
};
