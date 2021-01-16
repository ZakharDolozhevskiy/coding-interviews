// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) { return l1 || l2 }

    let temp = { next: null }
    let curr = temp

    while (l1 || l2) {
        if (l1 && !l2 || (l1 && l2 && l1.val < l2.val)) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    return temp.next
}