// Given a column title as appears in an Excel sheet, return its corresponding column number.
// A -> 1 B -> 2 C -> 3 ... Z -> 26 AA -> 27 AB -> 28

const titleToNumber = str => {
  let num = 0;
  let offset = 64;

  for (let i = str.length - 1; i >= 0; i--) {
    num += (str[i].charCodeAt(0) - offset) * Math.pow(26, str.length - 1 - i);
  }

  return num;
};
