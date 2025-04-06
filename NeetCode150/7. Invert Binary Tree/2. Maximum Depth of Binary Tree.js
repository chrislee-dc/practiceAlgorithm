// Given the root of a binary tree, return its depth.

const createBinaryTree = require("../../utils/createBinaryTree");

// The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [1,2,3,null,null,4]

// Output: 3
// Example 2:

// Input: root = []

// Output: 0

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
  // first solution
  maxDepth(root) {
    if (root === null) return 0;

    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }

  // second solution
  maxDepth2(root) {
    const stack = [[root, 1]];
    let res = 0;

    while (stack.length > 0) {
      const current = stack.pop();
      const node = current[0];
      const depth = current[1];

      if (node !== null) {
        res = Math.max(res, depth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }
    return res;
  }
}

bTree = createBinaryTree([1, 2, 3, 4]);
console.log(new Solution().maxDepth(bTree));
