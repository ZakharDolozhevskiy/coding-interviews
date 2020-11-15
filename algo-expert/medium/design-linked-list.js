var Node = function(val) {
    return {
        value: val,
        next: null
    }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index, raw = false) {
    if (index < 0 || index >= this.length || this.head === null) {
        return -1
    }

    var temp = this.head, i = 0;

    while (i < index) { temp = temp.next; i++ }

    return temp.value
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node = new Node(val)

    node.next = this.head
    this.head = node

    this.length++
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = new Node(val)

    if (this.head === null) {
        this.head = node
    } else {
        var temp = this.head
        while (temp.next) { temp = temp.next }
        temp.next = node
    }

    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) {
        return
    }

    if (index === 0) {
        this.addAtHead(val)
    } else {
        var temp = this.head, node = new Node(val), i = 0
        while (i < index - 1) { temp = temp.next; i++ }
        node.next = temp.next
        temp.next = node
    }

    this.length++
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= 0 && index < this.length) {
        if (index === 0) {
            this.head = this.head.next
        } else {
            var temp = this.head, i = 0
            while (i < index - 1) { temp = temp.next; i++ }
            temp.next = temp.next.next
        }

        this.length--
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */