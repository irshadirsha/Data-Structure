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
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let current = this.root;
  
      while (true) {
        if (value === current.value) {
          // Value already exists, do nothing.
          return this;
        }
  
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    // search(value) {
    //   let current = this.root;
  
    //   while (current) {
    //     if (value === current.value) {
    //       return true;
    //     }
  
    //     if (value < current.value) {
    //       current = current.left;
    //     } else {
    //       current = current.right;
    //     }
    //   }
  
    //   return false;
    // }
    search(value, current = this.root) {
        if (!current) {
            return false;
        }
    
        if (value === current.value) {
            return true;
        }
    
        if (value < current.value) {
            return this.search(value, current.left);
        } else {
            return this.search(value, current.right);
        }
    }
    
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
      }
  
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
  
  console.log(bst.inOrderTraversal()); // Output: [3, 5, 7, 10, 15]
  console.log(bst.search(7)); // Output: true
  console.log(bst.search(12)); // Output: false
  