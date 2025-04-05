// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

const {
  createLinkedList,
} = require("../../Cracking coding interview 6th/Chapter2/createLinkedList.util");

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }
}

arr = [0, 1, 2];

const list = createLinkedList(arr);

new Solution().reverseList(list.head);
