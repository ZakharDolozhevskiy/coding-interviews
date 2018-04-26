// Reverse Linked List
// iteratively approach
const reverseList = function(head) {
  let node = head;
  let list = null;
  let temp;

  while (node !== null) {
    temp = node.next;
    node.next = list;
    list = node;
    node = temp;
  }

  return list;
};

// recursively. approach
const reverse = function(node) {
 if (!node || !node.next)
   return node;

 let list = reverse(node.next);

 node.next.next = node;
 node.next = null;

 return list;
};