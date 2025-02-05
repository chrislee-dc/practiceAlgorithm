/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let lowNum = new ListNode(0);
  let bigNum = new ListNode(0);

  let lNode = lowNum;
  let bNode = bigNum;

  while (head) {
    const value = head.val;
    if (value < x) {
      lNode.next = new ListNode(value);
      lNode = lNode.next;
    } else {
      bNode.next = new ListNode(value);
      bNode = bNode.next;
    }
    head = head.next;
  }

  lNode.next = bigNum.next;

  return lowNum.next;
};

const a = [1, 4, 3, 2, 5, 2];

let list = new ListNode(1);
let tempNode = list;
console.log(structuredClone(list));

for (let i = 1; i < a.length; i++) {
  tempNode.next = new ListNode(a[i]);
  tempNode = tempNode.next;
}

// console.log(structuredClone(list))

console.log(partition(list, 3));

// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]

// Input: head = [2,1], x = 2
// Output: [1,2]
