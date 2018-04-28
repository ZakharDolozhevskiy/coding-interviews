// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
// the two subtrees of every node never differ by more than 1.

// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//      0
//     / \
//   -3   9
//   /   /
// -10  5

const sortedArrayToBST = function(src, parent, start = 0, end = source.length - 1) {
  if (!source.length || start > end)
    return src;

  const mid = start + Math.ceil((end - start) / 2);

  parent = parent || new TreeNode(src[mid]);

  if (parent.val > src[mid]) {
    parent.left = new TreeNode(src[mid]);
    parent = parent.left;
  } else {
    parent.right = new TreeNode(src[mid]);
    parent = parent.right;
  }

  sortedArrayToBST(src, parent, start, mid - 1);
  sortedArrayToBST(src, parent, mid + 1, end);

  return parent;
};