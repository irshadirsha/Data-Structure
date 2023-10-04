class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the BST
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertRecursive(this.root, newNode);
      }
    }
  
    _insertRecursive(currentNode, newNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this._insertRecursive(currentNode.left, newNode);
        }
      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this._insertRecursive(currentNode.right, newNode);
        }
      }
    }
  
    // Search for a value in the BST
    search(value) {
      return this._searchRecursive(this.root, value);
    }
  
    _searchRecursive(currentNode, value) {
      if (!currentNode) {
        return false;
      }
  
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        return this._searchRecursive(currentNode.left, value);
      } else {
        return this._searchRecursive(currentNode.right, value);
      }
    }
  
    // In-order traversal of the BST
    inOrderTraversal() {
      const result = [];
  
      function traverse(node) {
        if (node) {
          traverse(node.left);
          result.push(node.value);
          traverse(node.right);
        }
      }
  
      traverse(this.root);
      return result;
    }
  }
  
  // Example usage:
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);
  
  console.log(bst.search(7)); // true
  console.log(bst.search(9)); // false
  
  console.log(bst.inOrderTraversal()); // [3, 5, 7, 10, 12, 15, 18]
  