/**
 * DFS / BFS
 * https://leetcode.com/problems/validate-binary-search-tree/Figures/145_transverse.png
 *
 * Leet code
 * https://leetcode.com/problems/binary-tree-inorder-traversal
 */

 const bfsTraversal = (root) => {
    const nodes = [root]

    while(nodes.length) {
      const node = nodes.shift()
      console.log(node)
      node.push(node.left)
      node.push(node.right)
    }
 }

 var inorderTraversal = function(root) {
    var res = []
    var stack = []
    var current = root

    while(current !== null || stack.length) {
        while (current !== null) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current.val)
        current = current.right
    }

    return res
};

var postorderTraversal = function(root) {
    // recursion
    // var helper = function(root, aux) {
    //  root && root.left && helper(root.left, aux)
    //  root && root.right && helper(root.right, aux)
    //  root && aux.push(root.val)
    // }

    var stack = []
    var result = []

    var current = root

    while (current || stack.length) {
        // 1 Take right and then current element
        // 2 Procced to the most left position
        while (current) {
            current.right && stack.push(current.right)
            stack.push(current)
            current = current.left
        }

        current = stack.pop()

        // swap root node with right if it exists and at last stack position
        if (current.right && current.right === stack[stack.length - 1]) {
            stack.pop()
            stack.push(current)
            current = current.right
        } else {
            result.push(current.val)
            current = null
        }
    }

    return result
};

var preorderTraversal = function(root) {
    // var helper = function(node, aux) {
    //     node && aux.push(node.val)

    //     if (node && node.left) {
    //         helper(node.left, aux)
    //     }

    //     if (node && node.right) {
    //         helper(node.right, aux)
    //     }
    // }
    var res   = []
    var stack = []

    var current = root

    while (current || stack.length) {
        while (current) {
            current.right && stack.push(current.right)
            res.push(current.val)
            current = current.left
        }
        current = stack.pop()
    }

    return res
};