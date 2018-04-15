// Given a string, find the rank of the string amongst its permutations sorted lexicographically.
// Assume that no characters are repeated.
// The answer might not fit in an integer, so return your answer % 1000003

const findRank = str => {
  let head = str[0];
  let size = str.length;
  let count = 0;

  for (let i = 1; i < size; i++)
    head > str[i] && count++;

  return size < 2
    ? count + 1
    : factorial(size - 1) * count + findRank(str.slice(1)) % 1000003;
};

const factorial = n => n === 0
  ? 1
  : n * factorial(n - 1) % 1000003;

