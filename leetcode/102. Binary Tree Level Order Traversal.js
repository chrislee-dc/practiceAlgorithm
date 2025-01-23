// Given the root of a binary tree,
// return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1: Look at the picture

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (root === null) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    let node = [];
    let childNodeLength = queue.length;
    while (childNodeLength) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      node.push(current.val);
      childNodeLength--;
    }

    result.push(node);
  }
  return result;
};

const a = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

const b = [1];
const c = [];

console.log(levelOrder(a));
// console.log(levelOrder(b));
// console.log(levelOrder(c));
