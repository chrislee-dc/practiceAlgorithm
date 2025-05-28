// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

const {
  createBinarySearchTree,
} = require("../../utils/createBinarySearchTree");

// A binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:

// Input: root = [2,1,3], k = 1

// Output: 1
// Example 2:

// Input: root = [4,3,5,2,null], k = 4

// Output: 5
// Constraints:

// 1 <= k <= The number of nodes in the tree <= 1000.
// 0 <= Node.val <= 1000

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
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    let res = [];
    this.findKthSmallest(root, k, res);
    return res[k - 1];
  }

  findKthSmallest(root, k, res) {
    if (!root) return;

    this.findKthSmallest(root.left, k, res);

    if (root.val > 0) {
      res.push(root.val);
    }

    this.findKthSmallest(root.right, k, res);
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

class NeetcodeSolutionOptimal {
  /**
   * @param {TreeNode} root
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    const tmp = new Int32Array(2);
    tmp[0] = k;
    this.dfs(root, tmp);
    return tmp[1];
  }

  /**
   * @param {TreeNode} node
   * @param {number[]} tmp
   */
  dfs(node, tmp) {
    if (!node) return;
    this.dfs(node.left, tmp);
    tmp[0]--;
    if (tmp[0] === 0) {
      tmp[1] = node.val;
      return;
    }
    this.dfs(node.right, tmp);
  }
}

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

(root = [5, 3, 6, 2, 4, null, null, 1]), (k = 1);
list = createBinarySearchTree(root);

new Solution().kthSmallest(list, k);
