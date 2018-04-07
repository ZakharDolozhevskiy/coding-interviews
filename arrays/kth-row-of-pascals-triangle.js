// Given an index k, return the kth row of the Pascal’s triangle.
//
// Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

const getRow = n => {
  let row = [1];

  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 0; j--) {
      row[j] = (row[j] && row[j - 1]) ? row[j] + row[j - 1] : 1;
    }
  }

  return row;
};

console.log(getRow(3));