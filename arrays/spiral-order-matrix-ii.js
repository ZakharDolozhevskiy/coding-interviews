// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
// Example: Given n = 3, You should return the following matrix:
// [
//   [ 1, 2, 3 ],
//   [ 8, 9, 4 ],
//   [ 7, 6, 5 ]
// ]

const generateMatrix = n => {
  let target = Math.pow(n, 2);
  let current = 1;
  let size = n;

  let matrix = [];

  while(matrix.length !== n)
    matrix.push([]);

  let x, y;

  while(current <= target) {
    for (x = n - size, y = n - size; x < size; x++)
      matrix[y][x] = current++;

    for (x = size - 1, y = n - size + 1; y < size; y++)
      matrix[y][x] = current++;

    for (x = size - 2, y = size - 1; x >= n - size; x--)
      matrix[y][x] = current++;

    for (x = n - size, y = size - 2; y > n - size; y--)
      matrix[y][x] = current++;

    size--;
  }

  return matrix;
};

console.log(generateMatrix(5));