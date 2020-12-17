// Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

const maxPathSum = (root) => {
    ans = [-Infinity]
    postOrderTraversal(root, ans)
    return ans[0]
};

const postOrderTraversal = (node, ans) => {
    if (!node) return 0

    const leftPath = postOrderTraversal(node.left, ans)
    const rightPath = postOrderTraversal(node.right, ans)

    const onePath = Math.max(node.val, node.val + leftPath, node.val + rightPath)
    const allPath = Math.max(onePath, node.val + leftPath + rightPath)

    ans[0] = Math.max(ans[0], allPath)

    return onePath
}