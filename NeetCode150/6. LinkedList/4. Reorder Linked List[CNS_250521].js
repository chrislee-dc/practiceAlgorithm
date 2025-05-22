// You are given the head of a singly linked-list.

const {
  createLinkedList,
} = require("../../Cracking coding interview 6th/Chapter2/createLinkedList.util");

// The positions of a linked list of length = 7 for example, can intially be represented as:

// [0, 1, 2, 3, 4, 5, 6]

// Reorder the nodes of the linked list to be in the following order:

// [0, 6, 1, 5, 2, 4, 3]

// Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

// [0, n-1, 1, n-2, 2, n-3, ...]

// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

// Example 1:

// Input: head = [2,4,6,8]

// Output: [2,8,4,6]
// Example 2:

// Input: head = [2,4,6,8,10]

// Output: [2,10,4,8,6]
// Constraints:

// 1 <= Length of the list <= 1000.
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let second = slow.next;
    let prev = null;
    slow.next = null;
    while (second) {
      let temp = second.next;
      second.next = prev;
      prev = second;
      second = temp;
    }

    let first = head;
    second = prev;

    while (second) {
      let temp1 = first.next;
      let temp2 = second.next;

      first.next = second;
      second.next = temp1;
      first = temp1;
      second = temp2;
    }
  }
}

const newList = createLinkedList([2, 4, 6, 8, 10]);
// const newList = createLinkedList([1, 2, 3]);
new Solution().reorderList(newList);

// Input: head = [2,4,6,8,10]
// Output: [2,10,4,8,6]

// [1,2,3,4,5,6,7,8,9,10];
// [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]

// i = 1
// length -1 - i === 10

// i = 2
// length -1 - i === 9
