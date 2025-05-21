// You are given the heads of two sorted linked lists list1 and list2.

const {
  createLinkedList,
} = require("../../Cracking coding interview 6th/Chapter2/createLinkedList.util");

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

// Input: list1 = [1,2,4], list2 = [1,3,5]

// Output: [1,1,2,3,4,5]

// Example 2:

// Input: list1 = [], list2 = [1,2]

// Output: [1,2]
// Example 3:

// Input: list1 = [], list2 = []

// Output: []

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
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */

  mergeTwoLists(list1, list2) {
    let dummy = { value: 0, next: null };
    let newList = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        newList.next = list1;
        list1 = list1.next;
      } else {
        newList.next = list2;
        list2 = list2.next;
      }
      newList = newList.next;
    }
    console.log(dummy);

    if (list1) {
      newList.next = list1;
    } else {
      newList.next = list2;
    }
    return dummy.next;
  }
}

list1 = createLinkedList([1, 2, 4]);
list2 = createLinkedList([1, 3, 5]);

new Solution().mergeTwoLists(list1, list2);
