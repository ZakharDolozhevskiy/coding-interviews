/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var root = new ListNode(null)

    root.next = head

    var pointerA = root
    var pointerB = root

    for (var i = 1; i <= n + 1; i++) {
        pointerA = pointerA.next
    }

    while (pointerA) {
        pointerA = pointerA.next
        pointerB = pointerB.next
    }

    pointerB.next = pointerB.next.next

    return root.next
};