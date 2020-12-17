// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/submissions/
// All Elements in Two Binary Search Trees

const getAllElements = function(root1, root2) {
    const aux1 = []
    const aux2 = []

    const result = []

    root1 && dfs(root1, aux1)
    root2 && dfs(root2, aux2)

    while (aux1.length || aux2.length) {
        if (aux1.length === 0 || aux1[0] >= aux2[0]) result.push(aux2.shift())
        else if (aux2.length === 0 || aux2[0] >= aux1[0]) result.push(aux1.shift())
    }

    return result
};

const dfs = (node, aux) => {
    node.left && dfs(node.left, aux)
    aux.push(node.val)
    node.right && dfs(node.right, aux)
}