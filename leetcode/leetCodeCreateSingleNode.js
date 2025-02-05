const createNewNode = (arr) => {
  let list = new ListNode(arr[0]);
  let tempNode = list;

  for (let i = 1; i < arr.length; i++) {
    tempNode.next = new ListNode(arr[i]);
    tempNode = tempNode.next;
  }
  return list;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = {
  createNewNode,
  ListNode,
};
