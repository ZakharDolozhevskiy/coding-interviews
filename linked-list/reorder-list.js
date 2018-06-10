// Reorder List
// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
// Given 1->2->3->4, reorder it to 1->4->2->3.
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

const reorderList = (head) => {
  let tail = head;
  let last = null;
  let nodeB = null;
  let nodeA = head && head.next;

  while (nodeA !== null && nodeA !== last) {
    nodeB = nodeA;

    while (nodeB.next !== null && nodeB.next !== last)
      nodeB = nodeB.next;

    if (nodeA === nodeB) {
      tail.next = nodeA;
      tail = tail.next;
      break;
    }

    last = nodeB;
    tail.next = nodeB;
    tail.next.next = nodeA;
    tail = tail.next.next;

    nodeA = nodeA.next;
  }

  tail && (tail.next = null);
};