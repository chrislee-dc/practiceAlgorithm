// Given a binary tree, return true if it is height-balanced and false otherwise.

const createBinaryTree = require("../../utils/createBinaryTree");

// A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Input: root = [1,2,3,null,null,4]

// Output: true
// Example 2:

// Input: root = [1,2,3,null,null,4,null,5]

// Output: false
// Example 3:

// Input: root = []

// Output: true
// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -1000 <= Node.val <= 1000

// Recommended Time & Space Complexity
// You should aim for a solution with O(n) time and O(n) space, where n is the number of nodes in the tree.

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

// my solution
class Solution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalanced(root) {
    if (root === null) return true;
    let result = [true];
    this.getTreeHeight(root, result);
    return result[0];
  }
  getTreeHeight(root, result) {
    if (root === null) return 0;

    let leftHeight = this.getTreeHeight(root.left, result);
    let rightHeight = this.getTreeHeight(root.right, result);
    if (Math.abs(leftHeight - rightHeight) > 1 && result[0]) {
      result[0] = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }
}

// Neetcode solution
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

class NeetCodeSolution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalanced(root) {
    return this.dfs(root)[0] === 1;
  }

  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  dfs(root) {
    if (!root) {
      return [1, 0];
    }

    const left = this.dfs(root.left);
    const right = this.dfs(root.right);

    const balanced =
      left[0] === 1 && right[0] === 1 && Math.abs(left[1] - right[1]) <= 1;
    const height = 1 + Math.max(left[1], right[1]);

    return [balanced ? 1 : 0, height];
  }
}

list = createBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(new Solution().isBalanced(list));
