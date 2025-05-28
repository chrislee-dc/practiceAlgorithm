// Count Good Nodes in Binary Tree
// Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x

const createBinaryTree = require("../../utils/createBinaryTree");

// Given the root of a binary tree root, return the number of good nodes within the tree.

// Example 1:

// Input: root = [2,1,1,3,null,1,5]

// Output: 3

// Example 2:

// Input: root = [1,2,-1,3,4]

// Output: 4
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
  goodNodes(root) {
    let result = [];
    this.dfs(root, result, root.val);
    console.log("🚀 ~ Solution ~ goodNodes ~ result:", result);
    return result.length;
  }

  dfs(root, result, pathMaxValue) {
    if (!root) return 0;

    if (root.val >= pathMaxValue) {
      result.push(root.val);
      pathMaxValue = root.val;
    }

    this.dfs(root.left, result, pathMaxValue);
    this.dfs(root.right, result, pathMaxValue);
  }
}

class NeetCodeSolution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  goodNodes(root) {
    return this.dfs(root, root.val);
  }

  /**
   * @param {TreeNode} node
   * @param {number} maxVal
   * @return {number}
   */
  dfs(node, maxVal) {
    if (!node) {
      return 0;
    }

    let res = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(maxVal, node.val);
    res += this.dfs(node.left, maxVal);
    res += this.dfs(node.right, maxVal);
    return res;
  }
}

root = [2, 1, 1, 3, null, 1, 5];
list = createBinaryTree(root);

console.log(new NeetCodeSolution().goodNodes(list));
