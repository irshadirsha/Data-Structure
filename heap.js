class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {

          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          currentIndex = parentIndex;
        } else {
          break; // Heap property is satisfied
        }
      }
    }
  
    // Deletion of minimum element
    extractMin() {
      if (this.heap.length === 0) {
        return null; // Heap is empty
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop(); // Replace root with the last element
      this.heapifyDown(0);
  
      return minValue;
    }
  
    heapifyDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        // Swap with the smaller child
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        this.heapifyDown(smallestIndex);
      }
    }
  }
  
  // Example usage:
  const minHeap = new MinHeap();
  minHeap.insert(5);
  minHeap.insert(10);
  minHeap.insert(3);
  minHeap.insert(7);
  
  console.log(minHeap.heap); // [3, 7, 10, 5]
  
  console.log(minHeap.extractMin()); // 3
  console.log(minHeap.heap); // [5, 7, 10]
  