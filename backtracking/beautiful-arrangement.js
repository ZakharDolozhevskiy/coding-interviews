// Beautiful Arrangement

// Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is
// constructed by these N numbers successfully if one of the following is true for the ith position
// (1 <= i <= N) in this array:

// The number at the ith position is divisible by i.
// i is divisible by the number at the ith position.
// Now given N, how many beautiful arrangements can you construct?

// Input: 2 | Output: 2

// The first beautiful arrangement is [1, 2]:
// Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
// Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

// The second beautiful arrangement is [2, 1]:
// Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
// Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

const countArrangement = function(N) {
  let arrangement = [];

  if (N > 0) backtracking(N, arrangement);
  return arrangement.length;
};

const backtracking = function(n, arrangement, aux = []) {
  if (aux.length === n) return arrangement.push(1);

  for (let i = 1; i <= n; i++) {
    if (aux.includes(i)) continue;
    if (i % (aux.length + 1) !== 0 && (aux.length + 1) % i !== 0) continue;
    aux.push(i);
    backtracking(n, arrangement, aux);
    aux.pop();
  }
};