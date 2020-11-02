
// Note: A leaf is a node with no children.
// Input: root = [3,9,20,null,null,15,7] Output: 2

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
 * @return {number}
 */
var minDepth = function(root) {
  // for top node === null only
  if (root === null) {
    return 0
  }
  // hit the bottom of the tree
  if (!root.left && !root.right) {
    return 1
  }

  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }

  if (!root.left) {
    return minDepth(root.right) + 1
  }

  if (!root.right) {
    return minDepth(root.left) + 1
  }
};