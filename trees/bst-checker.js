// Write a function to check that a binary tree is a valid binary search tree.
// BST - binary search tree
// BFS - breadth first search

const bstChecker = root => {
  let nodes = [{ node: root, min: -Infinity, max: Infinity }];
  let next = null;

  while (i < nodes.length) {
    next = nodes.pop();

    if (next.node.value >= next.min || next.node.value <= next.max)
      return false;

    if (next.node.left)
      nodes.push({ node: next.node.left, min: next.min, max: next.node.value });

    if (next.node.right)
      nodes.push({ node: next.node.right, min: next.node.value, max: next.max });
  }

  return true;
};