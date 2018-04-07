// You are given an array of N integers, A1, A2 ,…, AN. Return maximum value of f(i, j) for all 1 ≤ i, j ≤ N.
// f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.

// For example:
// A=[1, 3, -1]
//
// f(1, 1) = f(2, 2) = f(3, 3) = 0
// f(1, 2) = f(2, 1) = |1 - 3| + |1 - 2| = 3
// f(1, 3) = f(3, 1) = |1 - (-1)| + |1 - 3| = 4
// f(2, 3) = f(3, 2) = |3 - (-1)| + |2 - 3| = 5
//
// So, we return 5.
// console.log(maxAbsDiff([ 55, -8, 43, 52, 8, 59, -91, -79, -18, -94 ])); // 158
// console.log(maxAbsDiff([ -98, -5, 37, -97, 38, 22, 70, 42, 61, 84 ])); // 191

function maxAbsDiff(array) {
  let min = [Infinity, Infinity];
  let max = [-Infinity, -Infinity];

  array.forEach((n, i) => {
    min[0] = Math.min(n - i, min[0]);
    min[1] = Math.min(n + i, min[1]);
    max[0] = Math.max(n - i, max[0]);
    max[1] = Math.max(n + i, max[1]);
  });

  return Math.max(max[0] - min[0], max[1] - min[1]);
}
