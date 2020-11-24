/**
 *
 * Shift Linked List
 * https://www.algoexpert.io/questions/Shift%20Linked%20List
 *
 */

function shiftLinkedList(head, k) {
    let listLength = 1
    let currentTail = head
    // Calculate length and set pointer to tail
    while (currentTail.next) {
        currentTail = currentTail.next
        listLength++
    }
    // Fix k if it greater then length
    let pos = Math.abs(k) % listLength

    if (pos === 0) { return head }

    // Define offset
    let offset = k > 0 ? listLength - pos : pos

    let newTail = head

    for (var i = 1; i < offset; i++) {
        newTail = newTail.next
    }

    let newHead = newTail.next

    currentTail.next = head
    newTail.next = null

    return newHead
}