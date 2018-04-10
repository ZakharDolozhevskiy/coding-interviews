// Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.
//
// Input:
//
// 1 2 3
// 4 5 6
// 7 8 9
//
// [ [1], [2, 4], [3, 5, 7], [6, 8], [9] ]
//

const diagonal = input => {
  let row, col, diagonal;
  let result = [];
  let size = input.length;

  for (let i = 0; i < size * 2 - 1; i++) {
    row = i < size ? 0 : i - (size - 1);
    col = i < size ? i : size - 1;
    diagonal = [];

    while (row <= size - 1 && col >= 0) {
      diagonal.push(input[row++][col--]);
    }
    result.push(diagonal);
  }

  return result;
};
