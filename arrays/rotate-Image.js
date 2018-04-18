// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
//
// Note: You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

const rotate1 = function(matrix) {
  let prev, next;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      prev = matrix[i][j];
      next = matrix[j][matrix.length - i - 1];

      matrix[j][matrix.length - i - 1] = [
        Array.isArray(next) ? next[0] : next,
        Array.isArray(prev) ? prev[0] : prev
      ];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = matrix[i][j][1];
    }
  }
};

const rotate2 = matrix => {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [ matrix[i][j], matrix[j][i] ] = [ matrix[j][i], matrix[i][j] ];
    }
  }
};
