/*
You have a sorted array of integers from 1 to n.
Each number occurs exactly once but one number is missing. Write a function that accepts an array and returns the missing number.

Example: Array: [1, 3, 4, 5, 6] Result: 2

[0, 1, 2, 3, 4]
[1, 3, 4, 5, 6]
*/

const getMissedNumber = (array, start = 0, end = array.length - 1, shift) => {
  let mid;

  if (array[end] - shift === end)
    return array[end] + 1;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (mid + shift === array[mid])
      start = mid + 1;
    else
      end = mid;
  }

  return (array[mid] + 1 === array[mid + 1]) ? array[mid] - 1 : array[mid] + 1;
};

// Second part: write function to find 2 missed numbers in sorted list

const getAllMissedNumbers = (array, start = 0, end = array.length - 1) => {
  let mid = Math.floor((start + end) / 2);

  if (array[end] - 1 === end) {
    return [array[end] + 1, array[end] + 2];
  }

  if (start === end) {
    return (array[mid] - 1 === array[mid - 1])
      ? [array[mid] + 1, array[mid] + 2]
      : [array[mid] - 2, array[mid] - 1];
  }

  if (mid + 1 === array[mid])
    return getAllMissedNumbers(array, mid + 1, end);
  else if (mid + 3 === array[mid])
    return getAllMissedNumbers(array, start, mid);
  else
    return [
      getMissedNumber(array, start, mid, 1),
      getMissedNumber(array, mid, end, 2)
    ];
};
