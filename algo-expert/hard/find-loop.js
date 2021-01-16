// Find Loop
// Leetcode: https://leetcode.com/problems/linked-list-cycle-ii
// Explanation: https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes

const detectCycle = function(head) {
    let pointerA = head
    let pointerB = head

    while (pointerB && pointerB.next && pointerB.next.next) {
        pointerA = pointerA.next
        pointerB = pointerB.next.next

        if (pointerA === pointerB) {
            pointerA = head

            while (pointerA !== pointerB) {
                pointerA = pointerA.next
                pointerB = pointerB.next
            }

            return pointerA
        }
    }

    return null
};