/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var aux = []
    var res = []

    helper(nums, aux, res)

    res.push([])

    return res
};

var helper = function(nums, aux, res, i = 0) {
    if (i === nums.length) {
        return
    }

    for (i; i < nums.length; i++) {
        aux.push(nums[i])
        helper(nums, aux, res, i + 1)
        res.push(aux.slice())
        aux.pop();
    }
}