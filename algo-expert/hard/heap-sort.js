

class Head {
    constructor(arr) {
        this.heap = arr.slice()
        this.ln = arr.length
        // helpers
        this.parent = index => (index - 1) / 2 ^ 0
        this.right = index => index * 2 + 2
        this.left = index => index * 2 + 1
        this.hasParent = index => this.parent(index) >= 0
        this.hasRight = index => this.right(index) < this.heap.length
        this.hasLeft = index => this.left(index) < this.heap.length

        this.heapifyDown()
    }

    add(item) {
        this.heap.push(item)
        this.heapifyUp()
    }

    remove() {
        this.heap[0] = this.heap.pop(item)
        this.heapifyDown()
    }

    heapifyUp() {
        let current = this.heap.length - 1

        while (this.hasParent(current)) {
            let parent = this.parent(current)

            if (this.heap[parent] < this.heap[current]) {
                break
            }

            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]]

            current = parent
        }
    }

    heapifyDown() {
        let current = 0, left, right

        while (this.hasLeft(current)) {
            left = this.left(current)
            right = this.right(current)

            if (this.hasRight(current) && this.heap[right] < this.heap[left]) {
                left = right
            }

            if (this.heap[current] > this.heap[left]) {
                [this.heap[current], this.heap[left]] = [this.heap[left], this.heap[current]]
            } else {
                break
            }

            current = left
        }


    }
}

const heapSort = (input) => {
    for (let k = input.length / 2 ^ 0; k >= 0; k--) {
        heapifyDown(input, k, input.length - 1)
    }

    for (let i = input.length - 1; i >= 0; i--) {
        [input[0], input[i]] = [input[i], input[0]]
        heapifyDown(input, 0, i - 1)
    }

    return input
}

const heapifyDown = (input, current, end) => {
    while (current * 2 + 1 <= end) {
        let left = current * 2 + 1
        let right = current * 2 + 2

        if (right <= end && input[right] > input[left]) {
            left = right
        }

        if (input[current] > input[left]) {
            break
        }

        [input[current], input[left]] = [input[left], input[current]]
        current = left
    }
}