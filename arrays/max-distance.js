// Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].
//
// If there is no solution possible, return -1.

// O(n * log(n))
const maxDistance = array => {
  let sorted = array
    .map((num, index) => ({ i: index, v: num }))
    .sort((a, b) => a.v - b.v);

  let size = sorted.length;
  let distance = 0;
  let maxIndex = sorted[size - 1].i;

  for (let i = size - 2; i >= 0; i--) {
    distance = Math.max(distance, maxIndex - sorted[i].i);
    maxIndex = Math.max(maxIndex, sorted[i].i);
  }

  return distance;
};

// O(n)
const maxDistance2 = array => {
  let min = [];
  let max = [];
  let i, j, diff = -1;

  min[0] = array[0];

  for (i = 1; i < array.length; i++) {
    min[i] = Math.min(min[i - 1], array[i]);
  }

  max[array.length - 1] = array[array.length - 1];

  for (i = array.length - 2; i >= 0; i--) {
    max[i] = Math.max(max[i + 1], array[i]);
  }

  i = j = 0;

  while (i < array.length && j < array.length) {
    if (min[i] <= max[j]) {
      diff = Math.max(diff, j - i);
      j++;
    } else {
      i++;
    }
  }

  return diff;
};
