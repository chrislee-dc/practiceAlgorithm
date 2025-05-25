// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

const {
  createLinkedList,
} = require("../../Cracking coding interview 6th/Chapter2/createLinkedList.util");

// The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.

// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the sum of the two numbers as a linked list.

// Input: l1 = [1,2,3], l2 = [4,5,6]

// Output: [5,7,9]

// Explanation: 321 + 654 = 975.

// Input: l1 = [9], l2 = [9]

// Output: [8,1]

// 1 <= l1.length, l2.length <= 100.
// 0 <= Node.val <= 9

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let cur = dummy;

    let carry = 0;
    while (l1 || l2 || carry) {
      const v1 = l1 ? l1.val : 0;
      const v2 = l2 ? l2.val : 0;

      let val = v1 + v2 + carry;
      carry = Math.floor(val / 10);
      val = val % 10;
      cur.next = new ListNode(val);

      cur = cur.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }

    return dummy.next;
  }
}

// Input: l1 = [1,2,3], l2 = [4,5,6]
// Output: [5,7,9]

l1 = createLinkedList([9, 9, 9]);
l2 = createLinkedList([9]);

new Solution().addTwoNumbers(l1, l2);
