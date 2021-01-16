// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/solution/

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Recursive

var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    } else {
        let node = reverseList(head.next)
        head.next.next = head
        head.next = null
        return node
    }
}

// Iterative

var reverseList = function(head) {
    let prev = null
    let temp = null

    while (head) {
        temp = head.next
        head.next = prev
        prev = head
        head = temp
    }

    return prev
}