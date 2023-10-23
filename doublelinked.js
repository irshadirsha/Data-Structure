class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    // Add a node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    // Delete a node from the list
    delete(data) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.data === data) {
          if (currentNode === this.head) {
            this.head = currentNode.next;
            if (this.head) {
              this.head.prev = null;
            }
          }
          if (currentNode === this.tail) {
            this.tail = currentNode.prev;
            if (this.tail) {
              this.tail.next = null;
            }
          }
          if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
          }
          if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
          }
          return; // Node found and deleted
        }
        currentNode = currentNode.next;
      }
    }
  
    // Display the list from head to tail
    displayForward() {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  
    // Display the list from tail to head
    displayBackward() {
      let currentNode = this.tail;
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.prev;
      }
    }
  }
  
  // Example usage:
  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.prepend(0);
  doublyLinkedList.displayForward(); // Output: 0, 1, 2, 3
  doublyLinkedList.delete(2);
  doublyLinkedList.displayForward(); // Output: 0, 1, 3
  doublyLinkedList.displayBackward(); // Output: 3, 1, 0
  

