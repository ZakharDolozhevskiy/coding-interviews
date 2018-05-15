// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
//
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

const kthSmallest = (root, k) => fillRanks(root)[k - 1];

const fillRanks = (node, acc = []) => {
  node.left && fillRanks(node.left, acc);
  acc.push(node.val);
  node.right && fillRanks(node.right, acc);

  return acc;
};