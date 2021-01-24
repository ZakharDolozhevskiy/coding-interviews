
const sort = (input, start = 0, end = input.length - 1) => {
    if (!input.length || input.length === 1) {
        return input
    }

    if (start < end) {
        const indexOfSorted = partition(input, start, end)
        sort(input, start, indexOfSorted - 1)
        sort(input, indexOfSorted + 1, sort)
    }

    return input
}

const partition = (input, start, end) => {
    let swapIndex = start

    for (let i = 0; i < input.length; i++) {
        if (input[i] < input[end]) {
            [input[swapIndex], input[i]] = [input[swapIndex], input[i]]
        }
    }

    [input[swapIndex], input[end]] = [input[swapIndex], input[end]]

    return swapIndex
}


const treeWayQuickSort = (input, start = 0, end = input.length - 1) => {
    if (start >= end) return;

    let pivot = input[end]
    let left = start
    let right = end
    let index = start

    while (index <= right) {
        if (input[index] < pivot) {
            [input[left], input[index]] = [input[index], input[left]]
            index++
            left++
        } else if (input[index] > pivot) {
            [input[right], input[index]] = [input[index], input[right]]
            right--
        } else {
            index++
        }
    }

    treeWayQuickSort(input, start, left - 1)
    treeWayQuickSort(input, right + 1, end)

    return input
}