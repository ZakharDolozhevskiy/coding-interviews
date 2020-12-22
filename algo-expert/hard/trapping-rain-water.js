// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

// Brute force
var trap = function(height) {
    let ans = 0, left_max, right_max;

    for (let i = 0; i < height.length; i++) {
        left_max = right_max = height[i]

        for (let l = 0; l < i; l++) {
            left_max = Math.max(left_max, height[l])
        }

        for (let r = i; r < height.length; r++) {
            right_max = Math.max(right_max, height[r])
        }

        ans += Math.min(left_max, right_max) - height[i]
    }

    return ans
};

// DP
var trap = function(height) {
    let ans = 0

    let left_max = new Array(height.length).fill(0)
    let right_max = new Array(height.length).fill(0)

    left_max[0] = height[0]
    right_max[height.length - 1] = height[height.length - 1]

    for (let i = 1; i < height.length; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1])
    }

    for (let j = height.length - 2; j >= 0; j--) {
        right_max[j] = Math.max(height[j], right_max[j + 1])
    }

    for (let k = 1; k < height.length - 1; k++) {
        ans += Math.min(left_max[k], right_max[k]) - height[k]
    }

    return ans
};

// pointers
var trap = function(height) {
    var left = 0, right = height.length - 1;
    var left_max = 0, right_max = 0, ans = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            left_max <= height[left] ? (left_max = height[left]) : ans += left_max - height[left]
            left++
        } else {
            right_max <= height[right] ? (right_max = height[right]) : ans += right_max - height[right]
            right--
        }
    }

    return ans
};