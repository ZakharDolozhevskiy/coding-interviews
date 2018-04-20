// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
// validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

const isValidSudoku = board => {
  let num, backet;
  let repeats = { columns: [], row: {}, backets: [] };

  board.forEach(x => repeats.columns.push({}));

  for (let i = 0; i < board.length; i++) {
    repeats.row = {};

    if (i % 3 === 0) repeats.backets = [{}, {}, {}];

    for (let j = 0; j < board.length; j++) {
      num = board[i][j];
      backet = j / 3 ^ 0;

      if (num === '.')
        continue;

      if (repeats.row[num] || repeats.columns[j][num] || repeats.backets[backet][num])
        return false;

      repeats.backets[backet][num] = true;
      repeats.columns[j][num] = true;
      repeats.row[num] = true;
    }
  }

  return true;
};


isValidSudoku([
  [".",".","4",".",".",".","6","3","."],
  [".",".",".",".",".",".",".",".","."],
  ["5",".",".",".",".",".",".","9","."],
  [".",".",".","5","6",".",".",".","."],
  ["4",".","3",".",".",".",".",".","1"],
  [".",".",".","7",".",".",".",".","."],
  [".",".",".","5",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]]
);