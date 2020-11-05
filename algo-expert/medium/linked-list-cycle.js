/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next || !head.next.next) {
        return false
    }

    var slow = head.next
    var fast = head.next.next

    while (slow && fast) {
        if (slow === fast) {
            return true
        }

        slow = slow ? slow.next : null
        fast = fast && fast.next ? fast.next.next : null
    }

    return false
};