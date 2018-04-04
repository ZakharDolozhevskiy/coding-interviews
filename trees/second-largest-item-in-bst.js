// Write a function to find the 2nd largest element in a binary search tree

const getLargest = (node, parent) =>
  node.right ? getLargest(node.right, node) : parent;

const getSecondLargestNode = rootNode => {
  let largestNodeParent = getLargest(rootNode, null);
  let largestNode = largestNodeParent.right;

  if (largestNode.left)
    return getLargest(largestNode.left, largestNode).right.value;
  else
    return largestNodeParent.value;
};

// v2

const getLargest2 = node =>
  node.right ? getLargest(node.right) : node.value;


const getSecondLargestNode2 = rootNode => {
  if (rootNode.right && !rootNode.right.right && !rootNode.right.left)
    return rootNode.value;

  if (rootNode.left && !rootNode.right)
    return getLargest2(rootNode.left);

  getSecondLargestNode2(rootNode.right);

};