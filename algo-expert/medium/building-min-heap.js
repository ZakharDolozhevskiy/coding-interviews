// https://www.geeksforgeeks.org/building-heap-from-array/

const heapify = function(i, arr) {
    const leafA = (i * 2) + 1
    const leafB = (i * 2) + 2

    let root = i

    if (leafA < arr.length && arr[i] > arr[leafA]) {
        root = leafA
    }

    if (leafB < arr.length && arr[i] > arr[leafB]) {
        root = leafB
    }

    if (root !== i) {
        [arr[i], arr[root]] = [arr[root], arr[i]]
        heapify(root, arr)
    }
}

// parent: (leaf index / 2) - 1
// left leaf: (parent index * 2) + 1
// right leaf: (parent index * 2) + 2
const solution = function(arr) {
    // start from last non-leaf node
    const lastNode = (arr.length / 2 ^ 0) - 1
    // Iterate to top visiting non-leaf nodes
    for (var i = lastNode; i >= 0; i++) { heapify(i, arr) }

    return arr
}