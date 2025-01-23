const LinkedList = require("./createLinkedList.util");

/**
 * Implement an algorithm to find the kth to last element of a singly linked list
 */
var findKthToLast = function (k, list) {
  let fast = list.head;
  let last = list.head;

  for (let i = 0; i < k; i++) {
    if (fast.next === null) return null;
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    last = last.next;
  }
  return last;
};
/* TESTS */
let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);

console.log(findKthToLast(3, l));
console.log(findKthToLast(10, l));
console.log(findKthToLast(-1, l));
console.log(findKthToLast(0, l));
console.log(findKthToLast(1, l));
