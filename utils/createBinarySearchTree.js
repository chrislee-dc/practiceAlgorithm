// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to insert a value into BST
function insertIntoBST(root, val) {
  if (root === null) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}

// Helper to build BST from an array of values
function createBinarySearchTree(values) {
  let root = null;
  for (let val of values) {
    root = insertIntoBST(root, val);
  }
  return root;
}

module.exports = createBinarySearchTree;
