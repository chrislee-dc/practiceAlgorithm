// The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

const createBinaryTree = require("../../utils/createBinaryTree");

// The length of a path between two nodes in a binary tree is the number of edges between the nodes.

// Given the root of a binary tree root, return the diameter of the tree.

// Example 1:

// Input: root = [1,null,2,3,4,5]

// Output: 3
// Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].

// Example 2:

// Input: root = [1,2,3]

// Output: 2
// Constraints:

// 1 <= number of nodes in the tree <= 100
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    if (root === null) return 0;
    let res = [0];
    this.getLeftRightHeight(root, res);
    return res[0];
  }
  getLeftRightHeight(root, res) {
    if (root === null) return 0;
    let leftValue = this.getLeftRightHeight(root.left, res);
    let rightValue = this.getLeftRightHeight(root.right, res);
    res[0] = Math.max(res[0], leftValue + rightValue);
    return 1 + Math.max(leftValue, rightValue);
  }
}

list = createBinaryTree([1, 2, 3]);
console.log(new Solution().diameterOfBinaryTree(list));
