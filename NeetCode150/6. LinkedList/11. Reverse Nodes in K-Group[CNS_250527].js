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
const { executeSolution } = require("../../utils/callSolutionMethod");

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        let index = 0;
        while (curr && index < k) {
            curr = curr.next;
            index++;
        }

        if (index === k) {
            curr = this.reverseKGroup(curr, k);
            while (index > 0) {
                let temp = head.next;
                head.next = curr;
                curr = head;
                head = temp;
                index--;
            }
            head = curr;
        }
        return head;
    }
}

(head = [1, 2, 3, 4, 5]), (k = 3);

head = createLinkedList(head);

executeSolution(Solution, head, k);
