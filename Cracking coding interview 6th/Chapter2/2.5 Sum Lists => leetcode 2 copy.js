/**
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

const {
  createNewNode,
  ListNode,
} = require("../../leetcode/leetCodeCreateSingleNode");

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;

  let carry = 0;
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + carry;
    // console.log(val);
    carry = Math.floor(val / 10);
    console.log(carry);
    val = val % 10;
    cur.next = new ListNode(val);

    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  console.log(dummy.next);
  return dummy.next;
};

const a = [2, 4, 3];
const b = [5, 6, 4];

const l1 = createNewNode(a);
const l2 = createNewNode(b);

addTwoNumbers(l1, l2);

// console.log(l1);
// console.log(l2);

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
