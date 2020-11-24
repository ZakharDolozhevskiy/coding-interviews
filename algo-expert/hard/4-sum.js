/**
 * 4Sum
 * https://leetcode.com/problems/4sum/
 */

const fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSum(nums, target, 0, 4)
}

const kSum = function(nums, target, start, k) {
    var result = []

    if (
        start === nums.length ||
        nums[start] * k > target ||
        nums[nums.length - 1] * k < target
    ) {
        return result
    }

    if (k === 2) {
        return twoSum(nums, target, start)
    }

    for (let i = start; i < nums.length; i++) {
        if (i === start || nums[i - 1] !== nums[i]) {
            let aux = kSum(nums, target - nums[i], i + 1, k - 1)
            aux.forEach(arr => arr.unshift(nums[i]))
            result = result.concat(aux)
        }
    }

    return result
}

const twoSum = function(nums, target, start) {
    let result = [];

    let lo = start;
    let hi = nums.length - 1;

    while (lo < hi) {
        let sum = nums[lo] + nums[hi];

        if (sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
            lo++;
        } else if (sum > target || (hi < nums.length - 1 && nums[hi] === nums[hi + 1])) {
            hi--;
        } else {
            result.push([nums[lo], nums[hi]])
            lo++;
            hi--;
        }
    }

    return result;
}