// Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

const createBinaryTree = require("../../utils/createBinaryTree");

// A valid binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:

// Input: root = [2,1,3]

// Output: true
// Example 2:

// Input: root = [1,2,3]

// Output: false
// Explanation: The root node's value is 1 but its left child's value is 2 which is greater than 1.

// Constraints:

// 1 <= The number of nodes in the tree <= 1000.
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
class NeetCodeSolution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isValidBST(root) {
    return this.dfs(root, -Infinity, Infinity);
  }

  dfs(root, left, right) {
    if (!root) return true;

    if (!(left < root.val && right > root.val)) {
      return false;
    }

    return (
      this.dfs(root.left, left, root.val) &&
      this.dfs(root.right, root.val, right)
    );
  }
}

root = [2, 1, 3];
root1 = [1, 2, 3];
root2 = [5, 4, 6, null, null, 3, 7];
root3 = [1, null, 1];
root4 = [5, 1, 6, null, null, 3, 7];
list = createBinaryTree(root4);

console.log(new NeetCodeSolution().isValidBST(list));
