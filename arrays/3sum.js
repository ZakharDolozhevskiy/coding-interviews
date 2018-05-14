// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.

// [-1, 0, 1, 2, -1, -4] => [ [-1, 0, 1], [-1, -1, 2] ]

var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  let result = [];
  let start, end, current, set, sum;

  for (let i = 0; i < nums.length; i++) {
    current = -nums[i];
    start = i + 1;
    end = nums.length - 1;

    while (start < end) {
      sum = nums[start] + nums[end];

      if (sum > current) end--;

      else if (sum < current) start++

      else {
        set = [ nums[start], nums[i], nums[end] ];
        result.push(set);

        while (start < end && nums[start] === set[0]) start++;
        while (start < end && nums[end] === set[2]) end--;
      }
    }

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
  }

  return result;
};