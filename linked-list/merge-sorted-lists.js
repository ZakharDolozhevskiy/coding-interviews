// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing
// together the nodes of the first two lists.
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const mergeTwoLists = (l1, l2) => {
  let list = {};
  let tail = list;

  while (l1 !== null || l2 !== null) {
    if (!l2 || l1 && l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next
  }

  return list.next || [];
};
