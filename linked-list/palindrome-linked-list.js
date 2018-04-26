// Given a singly linked list, determine if it is a palindrome.
// Could you do it in O(n) time and O(1) space?

const isPalindrome = function(head) {
  let tail = head;

  if (!head || !head.next)
    true;

  while (tail && tail.next) {
    tail.next && (tail.next.last = tail);
    tail = tail.next;
  }

  while (head && tail && head.val === tail.val) {
    head = head.next;
    tail = tail.last;
  }

  return !head && !tail;
};