// a new implementation of the linked list
/*
ADT:
# Main operations
prepend(value)        -> Add a node in the beginning
append(value)         -> Add a node in the end
pop()                 -> Remove a node from the end
popFirst()            -> Remove a node from the beginning
head()                -> Return the first node
tail()                -> Return the last node
remove(Node)*         -> Remove Node from the list
*/

const LinkedList = require("./createLinkedList.util");

// const LinkedList = require("../util/LinkedListX");
// NOTE: no type-safety
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8]) {
  list.append(elem);
}
// console.log(list);

function removeDuplicates(list) {
  let node = list.head;
  while (node) {
    let r = node;
    while (r.next !== null) {
      if (node.value === r.next.value) {
        r.next = r.next.next;
      } else {
        r = r.next;
      }
    }
    node = node.next;
  }
}

removeDuplicates(list);
console.log(list);
