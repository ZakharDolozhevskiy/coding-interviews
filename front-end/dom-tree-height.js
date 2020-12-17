// Get DOM tree height

const getHeight = (tree) => {
  return helper(tree)
}

const helper = (node) => {
    if (!node) return 0
    return Array.prototype.reduce.call(node.children, (height, child) => {
        return Math.max(height, helper(child) + 1)
    }, 1) // (1) - if the node doesn't have children we still need to count this node
}