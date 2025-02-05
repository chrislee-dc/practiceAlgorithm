/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
 */

/**
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

[1,2,3,4,5] // 2

1 3 5 2 4
1 2 3 4 5
 */

/**
 * 내가 이해한것
 * 아직도 두번째 while이 정확하게 첫번째 노드를 가리키는지는 모르겠다
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// let cycleNode = new ListNode(1);

// let headA = cycleNode;
// headA.next = new ListNode(2);
// headA.next.next = cycleNode;

let cycleNode = new ListNode(2);

let headA = new ListNode(3);
headA.next = cycleNode;
headA.next.next = new ListNode(0);
headA.next.next.next = new ListNode(-4);
headA.next.next.next.next = cycleNode;

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }
  if (!fast || !slow) {
    return null;
  }

  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
};

console.log(hasCycle(headA));
