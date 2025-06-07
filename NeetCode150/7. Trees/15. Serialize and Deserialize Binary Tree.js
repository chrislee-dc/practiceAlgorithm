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

const { createBinaryTree } = require("../../utils/createBinaryTree");

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];
        let recursion = (root) => {
            if (!root) {
                result.push("N");
                return;
            }

            result.push(root.val);
            recursion(root.left);
            recursion(root.right);
        };

        recursion(root);
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(",");
        let recursion = (result, index) => {
            if (data[index] === "N") {
                return [null, index + 1];
            }

            result = { val: data[index], left: null, right: null };
            index++;
            [result.left, index] = recursion(result.left, index);
            [result.right, index] = recursion(result.right, index);

            return [result, index];
        };

        let [finalResult] = recursion(null, 0);
        return finalResult;
    }
}

root = [1, 2, 3, null, null, 4, 5];
root = createBinaryTree(root);
let newCodec = new Codec();
let temp = newCodec.serialize(root);
newCodec.deserialize(temp);
