// Reverse Linked List II
// https://leetcode.com/problems/reverse-linked-list-ii

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

let reverseBetween = (head, m, n) => {
    if (!head || !head.next) return head

    let prev = null
    let curr = head

    while (m > 1) {
        prev = curr
        curr = curr.next
        m--
        n--
    }

    let init = prev
    let tail = curr
    let temp = null

    while (n > 0) {
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
        n--
    }

    if (init !== null) {
        init.next = prev
    } else {
        head = prev // whole list reverted
    }

    tail.next = curr

    return head
}