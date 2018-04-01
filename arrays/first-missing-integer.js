// Given an unsorted integer array, find the first missing positive integer.
//
// Given [1,2,0] return 3, [3,4,-1,1] return 2, [-8, -7, -6] returns 1
//
// Your algorithm should run in O(n) time and use constant space.
//
// O(n * log(n))
const firstMissingPositive = array => {
  array.sort((a, b) => a - b);

  let start = array.indexOf(1);
  let missed;

  if (start === -1) return 1;

  for (let i = start; i < array.length && !missed; i++) {
    if (array[i] + 1 !== array[i + 1])
      missed = array[i] + 1;
  }

  return missed || array[i] + 1;
};

// O(n)
const firstMissingPositive2 = array => {
  let num;

  for (let i = 0; i < array.length; i++)
    if (array[i] <= 0) array[i] = array.length + 1;

  for (let i = 0; i < array.length; i++) {
    num = Math.abs(array[i]);

    if (num > 0 && num <= array.length) {
      array[num - 1] = -1 * array[num - 1];
    }
  }

  for (let i = 0; i < array.length; i++)
    if (array[i] >= 0) return i + 1;
};



console.log(firstMissingPositive2([3,2,-1,1]));