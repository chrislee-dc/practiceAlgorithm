// You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

const createBinaryTree = require("../../utils/createBinaryTree");

// Example 1:

// Input: root = [1,2,3]

// Output: [1,3]
// Example 2:

// Input: root = [1,2,3,4,5,6,7]

// Output: [1,3,7]
// Constraints:

// 0 <= number of nodes in the tree <= 100
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
   * @return {number[]}
   */
  rightSideView(root) {
    let result = [];

    function dfs(root, depth) {
      if (!root) return;

      if (result.length === depth) {
        result.push(root.val);
      }

      dfs(root.right, depth + 1);
      dfs(root.left, depth + 1);
    }

    dfs(root, 0);
    return result;
  }
}

root = [1, 2, 3, 4, 5, 6, 7];
list = createBinaryTree(root);
console.log(new Solution().rightSideView(list));
