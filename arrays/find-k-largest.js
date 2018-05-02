// Find the kth largest element in an unsorted array. Note that it is the kth largest element in
// the sorted order, not the kth distinct element.
//
// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
//
// Example 2:
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

const findKthLargest = (nums, k) => {
  let index;
  let start = 0;
  let pos = nums.length - k;
  let end = nums.length - 1;

  while (start < end) {
    index = partition(nums, start, end);

    if (index > pos) {
      end = index - 1;
    } else if (index < pos) {
      start = index + 1;
    } else {
      return nums[pos];
    }
  }

  return nums[pos];
};

const partition = (nums, start, end) => {
  let swapIndex = start;

  for (let i = start; i < end; i++) {
    if (nums[i] < nums[end]) {
      [ nums[swapIndex], nums[i] ] = [ nums[i], nums[swapIndex] ];
      swapIndex++;
    }
  }

  [ nums[swapIndex], nums[end] ] = [ nums[end], nums[swapIndex] ];

  return swapIndex;
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));