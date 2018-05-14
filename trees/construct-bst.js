// Construct Binary Tree from Preorder and Inorder Traversal
// Given preorder and inorder traversal of a tree, construct the binary tree.
// Note:
// You may assume that duplicates do not exist in the tree.
// For example, given
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//    3
//   / \
//  9  20
//    /  \
//   15   7

const buildTree = (preorder, inorder) => {
  const mapIndexes = inorder.reduce((acc, val, idx) => {
    acc[val] = idx;
    return acc;
  }, {});

  return helper(preorder, inorder, mapIndexes);
};

const helper = (p, i, map, pStart = 0, iStart = 0, iEnd = i.length - 1) => {
  if (pStart >= p.length || iStart > iEnd)
    return null;

  const root = new TreeNode(p[pStart]);
  const idx = map[p[pStart]];

  root.left = helper(p, i, map, pStart + 1, iStart, idx - 1);
  root.right = helper(p, i, map, pStart + idx - iStart + 1, idx + 1, iEnd);

  return root;
};