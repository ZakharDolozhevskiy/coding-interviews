/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * https://leetcode.com/problems/validate-binary-search-tree/solution/
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity)
};

var helper = function(node, min, max) {
    if (node !== null) {
        if (min >= node.val || node.val >= max) return false
        if (!helper(node.left, min, node.val)) return false
        if (!helper(node.right, node.val, max)) return false
    }
    return true
}