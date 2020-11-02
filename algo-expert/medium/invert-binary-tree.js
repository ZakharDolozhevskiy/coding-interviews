// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var queue = []

    root && queue.push(root)

    while(queue.length) {
        var node = queue.shift()
        var temp = node.left
        node.left = node.right
        node.right = temp
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return root
};
