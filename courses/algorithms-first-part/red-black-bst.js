// Study https://www.youtube.com/playlist?list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin
// Inspired by https://github.com/liubinyi/red-black-tree-js
class Node {
    constructor(key, value) {
        this.key = key
        this.val = value
        this.left = null
        this.right = null
        this.color = null
        this.parent = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    insert(key, value) {
        const node = new Node(key, value)

        if (this.root === null) {
            this.root = node
            this.root.color = 'black'
        } else {
            let pointerA = null, pointerB = this.root

            while (pointerB) {
                pointerA = pointerB
                pointerB = pointerB.key > node.key ? pointerB.left : pointerB.right
            }

            node.parent = pointerA
            node.color = 'red'

            if (pointerA.key > node.key) {
                pointerA.left = node
            } else {
                pointerA.right = node
            }

            this.fixTree(node)
        }
    }
    search(key) {
        let node = this.root

        while(node) {
            if (node.key === key) {
                return node
            } else if (node.key > key) {
                node = node.left
            } else {
                node = node.right
            }
        }

        return null
    }
    fixTree(node) {
        while (node.parent !== null && node.parent.color === 'red') {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right
                // case 1: parent and uncle are red
                if (uncle && uncle.color === 'red') {
                    uncle.color = 'black'
                    node.parent.color = 'black'
                    node.parent.parent.color = 'red'
                    node = node.parent.parent
                    continue
                }
                // case 2: uncle black and triangle is formed
                if (node === node.parent.right) {
                    node = node.parent
                    this.rotateLeft(node)
                }
                // case 3: uncle black and line is formed
                node.parent.color = 'black'
                node.parent.parent.color = 'red'
                this.rotateRight(node.parent.parent)
            } else {
                // same as above but for right direction from grand parent
                let uncle = node.parent.parent.left

                if (uncle && uncle.color === 'red') {
                    node.color = 'black'
                    ode.parent.color = 'black'
                    node.parent.parent.color = 'red'
                    node = node.parent.parent
                    continue
                }

                if (node === node.parent.left) {
                    node = node.parent
                    this.rotateRight(node)
                }

                node.parent.color = 'black'
                node.parent.parent.color = 'red'
                this.rotateLeft(node.parent.parent)
            }
        }
        // case 0: root node
        this.root.color = 'black'
    }
    /**
     * Rotate left
     *       y                   x
     *      / \                 / \
     *     x  Gamma   <====   alpha y
     *   /  \                      / \
     * alpha beta               beta Gamma
     */
    rotateLeft(node) {
        let next = node.right

        node.right = next.left
        next.left = node

        if (node.right) {
            node.right.parent = node
        }

        if (node.parent === null) {
            this.root = y
        } else {
            if (node.parent.left === node) {
                node.parent.left = y
            } else {
                node.parent.right = y
            }
        }

        y.parent = node.parent
        node.parent = y
    }
    /**
     * Rotate right
     *       y                   x
     *      / \                 / \
     *     x  Gamma   ====>   alpha y
     *   /  \                      / \
     * alpha beta               beta Gamma
     */
    rotateRight(node) {
        let next = node.left

        node.left = next.right
        next.right = node

        if (node.left) {
            node.left.parent = node
        }

        if (node.parent === null) {
            this.root = next
        } else {
            if (node.parent.left === node) {
                node.parent.left = next
            } else {
                node.parent.right = next
            }
        }

        next.parent = node.parent
        node.parent = next
    }
}