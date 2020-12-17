// Two binary trees are considered the same if they have identical structure and nodes have the same value.
// This problem can be solved by using a simple recursive function.

const isSameTree = (nodeA, nodeB) => {
    if (nodeA === null && nodeB === null) {
        return true
    }

    if (nodeA === null ^ nodeB === null || nodeA.value !== nodeB.value) {
        return false
    }

    return isSameTree(nodeA.left, nodeA.right) && isSameTree(nodeB.left, nodeB.right)
}