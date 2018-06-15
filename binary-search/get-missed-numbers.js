/*
You have a sorted array of integers from 1 to n.
Each number occurs exactly once but one number is missing.
Write a function that accepts an array and returns the missing number.

Example: Array: [1, 3, 4, 5, 6] Result: 2

[0, 1, 2, 3, 4]
[1, 3, 4, 5, 6]


1. [1, 2, 3, 5, 7, 8, 9] // 1 on the left side and 1 on the right
2. [1, 2, 5, 6, 7, 8, 9 ] // 2 on the left side
3. [1, 2, 3, 4, 5, 8, 9 ] // 2 on the right side

*/

const search = (nums, shift, start = 0, end = nums.length - 1) => {
  if (start === end) {
    return start + shift;
  }

  const mid = start + ( end - start ) / 2 ^ 0;

  return nums[mid] === mid + shift
    ? search(nums, shift, mid + 1, end)
    : search(nums, shift, start, mid);
};

const searchForAll = (nums, start = 0, end = nums.length - 1) => {

  const mid = start + ( end - start ) / 2 ^ 0;

  if (nums[mid] - 1 === mid) {
    return searchForAll(nums, mid + 1, end);
  } else if (nums[mid] - 3 === mid) {
    return searchForAll(nums, start, mid);
  } else {
    return [
      search(nums, 1, start, mid),
      search(nums, 2, mid + 1, end)
    ];
  }
};



console.log(searchForAll([ 2, 3, 4, 5, 6, 7,  9]));