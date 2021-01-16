// Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/solution/

// O(kN) k - lists number
const mergeKLists = (lists) => {
    if (lists.length === 0 || (lists.length === 1 && !lists[0])) {
        return null
    }

    let head = { next: null }
    let min = Infinity
    let idx = null

    let current = head

    while (true) {
        // look for min and idx
        lists.forEach((list, index) => {
            if (list && min > list.val) {
                min = list.val
                idx = index
            }
        })
        // all done
        if (idx === null) {
            break
        }

        current.next = lists[idx]
        current = current.next

        lists[idx] = lists[idx].next

        min = Infinity
        idx = null
    }

    current.next = null

    return head.next
}

/// OPTIMIZED SOLUTION ///

// O(N log k)
const mergeKLists = (lists) => {
    while (lists.length > 1) {
        lists.push(mergeTwoLists(lists.pop(), lists.pop()))
    }
    return lists.length > 0 ? lists[0] : null
}

const mergeTwoLists = (l1, l2) => {
    const head = { next: null }

    let curr = head

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    if (l1) { curr.next = l1 }
    if (l2) { curr.next = l2 }

    return head.next
}