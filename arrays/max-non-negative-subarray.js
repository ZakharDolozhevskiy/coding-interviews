// Find out the maximum sub-array of non negative numbers from an array.
// The sub-array should be continuous. That is, a sub-array created by choosing the second and fourth
// element and skipping the third element is invalid.
//
// Maximum sub-array is defined in terms of the sum of the elements in the sub-array.
// Sub-array A is greater than sub-array B if sum(A) > sum(B).
// [1, 2, 5, -7, 2, 3]

const maxset = array => {
  let sum = 0;
  let start = 0, end;

  let max = -Infinity;
  let maxStart = 0, maxEnd = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      sum += array[i];
      end = i;
      continue;
    }

    if (sum > max || (sum === max && start + end > maxStart + maxEnd)) {
      maxStart = start;
      maxEnd = end;
      max = sum;
    }

    sum = 0;
    start = i + 1;
  }

  return sum > max
    ? array.slice(start, end + 1)
    : array.slice(maxStart, maxEnd + 1)
};
