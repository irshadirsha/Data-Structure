function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: Already sorted or empty array.
    }
  
    // Divide the array into two halves.
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort both halves and merge them.
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge the two sorted arrays into a single sorted array.
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add any remaining elements from both arrays (if any).
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Outputs: [11, 12, 22, 25, 64]
  