// find corresponding node in two identical DOM tree
// https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree

// dfs
const findCorrespondingNode = (rootA, rootB, target) => {
    const stackA = [rootA];
    const stackB = [rootB];

    while (stackA.length && stackB.length) {
        const nodeA = stackA.shift()
        const nodeB = stackB.shift()
        if (nodeA === target) return nodeB
        stackA.push(...nodeA.children)
        stackB.push(...nodeB.children)
    }
}

// DOM methods
const findCorrespondingNode = (rootA, rootB, target) => {
    if (rootA === target) return rootB

    let path = [];

    while (target !== rootA) {
        let parent = target.parentNode;
        path.push(Array.prototype.indexOf.call(parent.children, target));
        target = parent;
    }

    let result = rootB

    while (path.length) {
        let child = result.children[path.pop()];
        result = child
    }

    return result
}