// Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

const createBinaryTree = require("../../utils/createBinaryTree");

// Example 1:

// Input: root = [1,2,3,4,5,6,7]

// Output: [[1],[2,3],[4,5,6,7]]
// Example 2:

// Input: root = [1]

// Output: [[1]]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= The number of nodes in both trees <= 1000.
// -1000 <= Node.val <= 1000

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
   * @return {number[][]}
   */
  levelOrder(root) {
    let result = [];
    let level = -1;
    this.generateLevelOrderTraversal(root, result, level);
    return result;
  }

  generateLevelOrderTraversal(root, result, level) {
    if (!root) return 0;
    level++;

    if (!result[level]) result[level] = [];
    result[level].push(root.val);

    this.generateLevelOrderTraversal(root.left, result, level);
    this.generateLevelOrderTraversal(root.right, result, level);
  }
}

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

class NeetcodeSolution {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  levelOrder(root) {
    let res = [];

    /**
     * @param {TreeNode} node
     * @param {number} depth
     */
    function dfs(node, depth) {
      if (!node) return;

      if (res.length === depth) {
        res.push([]);
      }

      res[depth].push(node.val);
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return res;
  }
}

// root = [1, 2, 3, 4, 5, 6, 7];
// root = [1];
root = [];
list = createBinaryTree(root);

console.log(new Solution().levelOrder(list));
