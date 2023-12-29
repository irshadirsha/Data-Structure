class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (root === null) {
      return true;
    }
  
    if (root.value <= min || root.value >= max) {
      return false;
    }
  
    return (
      isBST(root.left, min, root.value) &&
      isBST(root.right, root.value, max)
    );
  }
  
  // Example usage:
  const rootNode = new TreeNode(10);
  rootNode.left = new TreeNode(5);
  rootNode.right = new TreeNode(15);
  rootNode.left.left = new TreeNode(3);
  rootNode.left.right = new TreeNode(7);
  rootNode.right.right = new TreeNode(20);
  
  console.log(isBST(rootNode)); // Output: true
  