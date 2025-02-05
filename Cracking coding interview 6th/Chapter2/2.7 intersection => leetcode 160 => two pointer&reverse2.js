// %%%%% I DON'T UNDERSTAND 20250126

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let intersectionNode = new ListNode(8);
let headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = intersectionNode;
intersectionNode.next = new ListNode(4);
intersectionNode.next.next = new ListNode(5);

let headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = intersectionNode; // 여기서 교차점 생성

function getIntersectionNode(headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    console.log("PA =>", pA);
    // console.log("PB =>", pB);
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
}

console.log(getIntersectionNode(headA, headB));
