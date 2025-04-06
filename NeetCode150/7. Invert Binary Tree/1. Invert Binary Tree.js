// You are given the root of a binary tree root. Invert the binary tree and return its root.

const createBinaryTree = require("../../utils/createBinaryTree");

// Example 1:
// Input: root = [1,2,3,4,5,6,7]

// Output: [1,3,2,7,6,5,4]

// Input: root = [3,2,1]

// Output: [3,1,2]

// Input: root = []

// Output: []

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
   * @return {TreeNode}
   */
  invertTree(root) {
    if (root === null) return null;

    [root.left, root.right] = [root.right, root.left];
    if (root.left) this.invertTree(root.left);
    if (root.right) this.invertTree(root.right);

    return root;
  }
}

const treeNode = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);

const temp = new Solution().invertTree(treeNode);
