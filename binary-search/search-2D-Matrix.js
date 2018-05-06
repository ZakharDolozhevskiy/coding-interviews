// Write an efficient algorithm that searches for a value in an m x n matrix.
// This matrix has the following properties:
//
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// For example,
//
// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]

// O(m * lgN)
const searchMatrix = (matrix, target) => {
  let size = matrix.length - 1, idx = -1;

  for (let i = 0; i <= size; i++) {
    if (matrix[i][0] <= target && target <= matrix[i][size])
      idx = binarySearch(matrix[i], target);
    if (idx !== -1) {
      return true;
    }
  }
  
  return false;
};

const binarySearch = (src, target, start = 0, end = src.length - 1) => {
  if (start > end) return -1;

  const mid = start + (end - start) / 2 ^ 0;

  return (src[mid] === target) ? mid
    : (src[mid] > target)
      ? binarySearch(src, target, start, mid - 1)
      : binarySearch(src, target, mid + 1, end);
};

// O(m + n)
const searchMatrix2 = (matrix, target) => {
  let row = 0;
  let col = matrix.length - 1;

  while (row <= matrix.length - 1 && col >= 0) {
    if (matrix[row][col] === target)
      return true;
    if (matrix[row][col] > target)
      col--;
    if (matrix[row][col] < target)
      row++;
  }

  return false;
};