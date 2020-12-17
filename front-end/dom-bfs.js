// Traverse DOM level by level
// https://bigfrontend.dev/problem/Traverse-DOM-level-by-level

const flatten = (root) => {
    const stack = [root]
    const result = []

    while (root && stack.length) {
        const node = stack.shift()
        result.push(node)
        for (let child of node.children) {
            stack.push(child)
        }
    }

    return result
}