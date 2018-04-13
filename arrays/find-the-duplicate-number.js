// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
// prove that at least one duplicate number must exist. Assume that there is only one duplicate number,
// find the duplicate one.
//
// Note:
//   You must not modify the array (assume the array is read only).
//   You must use only constant, O(1) extra space.
//   Your runtime complexity should be less than O(n2).
//   There is only one duplicate number in the array, but it could be repeated more than once.
//
// O(n) O(1)
const findDuplicate = array => {
  let pointerA = 0;
  let pointerB = 0;

  do {
    pointerA = array[pointerA];
    pointerB = array[array[pointerB]];
  } while (pointerA !== pointerB);

  // Find cycle entrance

  pointerB = 0;

  do {
    pointerB = array[pointerB];
    pointerA = array[pointerA]
  } while (pointerA !== pointerB);

  return pointerB;
};

console.log(findDuplicate([1,2,2,3,4]));