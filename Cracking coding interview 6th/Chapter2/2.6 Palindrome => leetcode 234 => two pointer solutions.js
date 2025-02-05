/**
 * 

Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

 */

const {
  createNewNode,
  ListNode,
} = require("../../leetcode/leetCodeCreateSingleNode");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = head;
  slow = reverseNode(slow);

  while (fast && slow) {
    // console.log(slow, "slowslow");
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};

const reverseNode = (node) => {
  let prev = null;
  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

// console.log("test");
const list = createNewNode([1, 2, 3, 4, 1]);
// const list = createNewNode([1, 2, 1]);

console.log(isPalindrome(list));
