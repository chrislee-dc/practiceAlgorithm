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

const { executeSolution } = require("../../utils/callSolutionMethod");
const { createBinaryTree } = require("../../utils/createBinaryTree");

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxNum = -Infinity;
        let recursion = (root) => {
            if (!root) return 0;

            let leftValue = recursion(root.left);
            let rightValue = recursion(root.right);

            maxNum = Math.max(maxNum, root.val + leftValue + rightValue);

            let rootVal = root.val > 0 ? root.val : 0;
            let maxSum =
                Math.max(leftValue, rightValue) > 0
                    ? Math.max(leftValue, rightValue)
                    : 0;

            return rootVal + maxSum;
        };

        recursion(root);
        return maxNum;
    }
}

// root = [1, 2, 3];
// root = [1, 1, 1, 1, 1, 1, 1];
// root = [2, -1];
root = [-15, 10, 20, null, null, 15, 5, -5];
root = createBinaryTree(root);
executeSolution(Solution, root);
