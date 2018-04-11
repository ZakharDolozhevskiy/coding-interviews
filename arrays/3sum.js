// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.

// [-1, 0, 1, 2, -1, -4] => [ [-1, 0, 1], [-1, -1, 2] ]

const threeSum = nums => {
  nums.sort((a, b) => a - b);

  let result = [], current, start, end, sum, set;

  for (let i = 0; i < nums.length; i++) {
    current = -nums[i];
    start = i;
    end = nums.length - 1;

    while (start < end) {
      sum = nums[start] + nums[end];

      if (current < sum)
        start++;

      else if (current > sum)
        end--;

      else {
        set = [ current, start, end ];
        result.push(set);

        while(start < end && set[1] === nums[start]) start++;
        while(start < end && set[1] === nums[start]) end--;
      }
    }

    while(i + 1 < nums.length && nums[i] === nums[i + 1]) i++
  }

  return result;
};