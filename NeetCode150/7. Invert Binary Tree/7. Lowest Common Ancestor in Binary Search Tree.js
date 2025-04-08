// Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.

const createBinarySearchTree = require("../../utils/createBinarySearchTree");

// The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q as descendants. The ancestor is allowed to be a descendant of itself.

// Example 1:

// Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8

// Output: 5
// Example 2:

// Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4

// Output: 3
// Explanation: The LCA of nodes 3 and 4 is 3, since a node can be a descendant of itself.

// Constraints:

// 2 <= The number of nodes in the tree <= 100.
// -100 <= Node.val <= 100
// p != q
// p and q will both exist in the BST.

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

//  Time & Space Complexity
//  Time complexity:
//  O(h)
//  Space complexity:
//  O(1)

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    [p, q] = p.val < q.val ? [p.val, q.val] : [q.val, p.val];
    return this.findLowestCommonAncestor(root, p, q);
  }

  findLowestCommonAncestor(root, p, q) {
    if (!root) return;
    const currValue = root.val;
    if (currValue < p) {
      return this.findLowestCommonAncestor(root.right, p, q);
    } else if (currValue >= p && currValue <= q) {
      return root;
    } else {
      return this.findLowestCommonAncestor(root.left, p, q);
    }
  }
}

class NeetCodeSolution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    let cur = root;

    while (cur) {
      if (p.val > cur.val && q.val > cur.val) {
        cur = cur.right;
      } else if (p.val < cur.val && q.val < cur.val) {
        cur = cur.left;
      } else {
        return cur;
      }
    }
    return null;
  }
}

(root = [5, 3, 8, 1, 4, 7, 9, null, 2]), (p = 3), (q = 8);
root = createBinarySearchTree(root);

console.log(new Solution().lowestCommonAncestor(root, p, q));
