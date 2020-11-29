/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var stack  = []
    var result = []

    var isOpositeDirection = false

    root && stack.push(root)

    while (stack.length) {
        var aux = []
        var res = []

        while (stack.length) {
            var node = stack.shift()

            if (isOpositeDirection) {
                node.left && aux.push(node.left)
                node.right && aux.push(node.right)
            } else {
                node.left && aux.unshift(node.left)
                node.right && aux.unshift(node.right)
            }

            res.push(node.val)
        }

        stack.push(...aux)
        result.push(res)

        isOpositeDirection = !isOpositeDirection
    }

    return result
};