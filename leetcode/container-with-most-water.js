// Container With Most Water
// https://leetcode.com/problems/container-with-most-water/submissions/
var maxArea = function(height) {
    var max = 0
    var aux = 0
    var i = 0, j = height.length - 1

    while (i < j) {
        aux = (j - i) * Math.min(height[i], height[j])
        max = Math.max(aux, max)
        height[i] > height[j] ? j-- : i++
    }

    return max
};