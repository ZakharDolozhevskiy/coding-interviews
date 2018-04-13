// A robot is located at the top-left corner of an A x B grid (marked ‘Start’ in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach
// the bottom-right corner of the grid (marked ‘Finish’ in the diagram below).
//
// How many possible unique paths are there?

function uniquePaths(A, B){
  let rows = Math.max(A, B);
  let columns = Math.min(A, B);

  let row = [];

  for (let i = 0; i < columns; i++) {
    row.push(0);
  }

  row[0]++;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 1; j++) {
      row[j + 1] += row[j];
    }
  }

  return row[row.length - 1];
}
