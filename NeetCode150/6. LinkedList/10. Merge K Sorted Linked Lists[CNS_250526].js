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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || !lists.length) return null;

        const combineTwoLists = (firstList, secondList) => {
            let dummy = { next: null };
            let curr = dummy;
            while (firstList && secondList) {
                if (firstList.val > secondList.val) {
                    curr.next = secondList;
                    secondList = secondList.next;
                } else {
                    curr.next = firstList;
                    firstList = firstList.next;
                }
                curr = curr.next;
            }

            curr.next = firstList || secondList;
            return dummy.next;
        };

        while (lists.length > 1) {
            const mergedList = [];
            for (let i = 0; i < lists.length; i = i + 2) {
                let firstList = lists[i];
                let secondList = i + 1 < lists.length ? lists[i + 1] : null;
                mergedList.push(combineTwoLists(firstList, secondList));
            }
            lists = mergedList;
        }

        return lists[0];
    }
}

let a = createLinkedList([1, 2, 4]);
let b = createLinkedList([1, 3, 5]);
let c = createLinkedList([3, 6]);

lists = [a, b, c];
new Solution().mergeKLists(lists);
