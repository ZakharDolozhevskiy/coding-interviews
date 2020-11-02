/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// O(n2)
var bstFromPreorder = function(preorder) {
    if (preorder.length === 0) return null

    var root = new TreeNode(preorder.shift())
    var index = 0

    while (root.val > preorder[index]) index++

    root.left = bstFromPreorder(preorder.slice(0, index))
    root.right = bstFromPreorder(preorder.slice(index))

    return root
};

// O(n)
var bstFromPreorder = function(preorder) {
    bstFromPreorder.index = 0
    return helper(preorder, preorder[0], -Infinity, Infinity, preorder.length)
};

var helper = function(src, num, min, max, ln) {
    if (bstFromPreorder.index >= ln) {
        return null
    }

    let node = null

    if (min < num && num < max) {
        node = new TreeNode(num)

        bstFromPreorder.index++

        if (bstFromPreorder.index < ln) {
            node.left = helper(src, src[bstFromPreorder.index], min, num, ln)
        }

        if (bstFromPreorder.index < ln) {
            node.right = helper(src, src[bstFromPreorder.index], num, max, ln)
        }
    }

    return node
}
