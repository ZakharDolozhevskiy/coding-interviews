// Sort Colors || 3 way qsort
//
// Given an array with n objects colored red, white or blue, sort them in-place so that objects of
// the same color are adjacent, with the colors in the order red, white and blue.
//
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
// Note: You are not suppose to use the library's sort function for this problem.
//
// Example:
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
//
const sortColors = (nums) => {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;

  while(i <= right) {
    if (nums[i] < 1) {
      [ nums[left], nums[i] ] = [ nums[i], nums[left] ];
      left++; i++;
    }
    else if (nums[i] > 1) {
      [ nums[right], nums[i] ] = [ nums[i], nums[right] ];
      right--;
    } else {
      i++;
    }
  }
};
