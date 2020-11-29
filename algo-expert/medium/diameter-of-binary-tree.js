// Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

// O(n) / O(n)
const diameterOfBinaryTree = function(root) {
    const result = 1

    const treeDepth = (node) => {
        if (node === null) return 0
        let left = treeDepth(node.left)
        let right = treeDepth(node.right)
        result = Math.max(result, left + right + 1)
        return Math.max(left, right) + 1
    }

    treeDepth(root)

    return result - 1
}