// Set Matrix Zeroes
// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
//   Input:           Output:
// [                [
//   [0,1,2,0],       [0,0,0,0],
//   [3,4,5,2],       [0,4,5,0],
//   [1,3,1,5]        [0,3,1,0]
// ]                ]
//
// Follow up:
//
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

const setZeroes = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let col0 = 1;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) col0 = 0;
    for (let j = 1; j < cols; j++)
      if (matrix[i][j] === 0) matrix[0][j] = matrix[i][0] = 0;
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--)
      if (matrix[0][j] === 0 || matrix[i][0] === 0)
        matrix[i][j] = 0;
    if (col0 === 0) matrix[i][0] = 0;
  }
};
