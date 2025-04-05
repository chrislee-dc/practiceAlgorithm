// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

const {
  createLinkedList,
} = require("../../Cracking coding interview 6th/Chapter2/createLinkedList.util");

// There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

// Note: index is not given to you as a parameter.

// Input: head = [1,2,3,4], index = 1

// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], index = -1

// Output: false
// Constraints:

// 1 <= Length of the list <= 1000.
// -1000 <= Node.val <= 1000
// index is -1 or a valid index in the linked list.

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
   * @return {boolean}
   */
  hasCycle(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }
}

list1 = createLinkedList([1, 2, 3, 4]);
list1.next.next.next.next = list1.next;

new Solution().hasCycle(list1);
