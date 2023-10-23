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
  


  // function binarysearch(arr,target){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){
//         const mid=Math.floor((left+right)/2)

//         if(arr[mid]==target){
//             return mid
//         }else if(arr[mid]<target){
//             left=mid+1

//         }else{
//             right=mid-1
//         }
//     }
//   return -1
// }
// let arr=[1,3,7,23,67,99]
// console.log(binarysearch(arr,-23))
let arr1=[2,5,9,11]
let arr2=[1,5,7,10]
function mergesort(arr1,arr2){
    let len=arr2.length
   for(i=0;i<arr1.length;i++){
    arr2[len+i]=arr1[i]
   }
   for(j=0;j<arr2.length-1;j++){
    for(i=0;i<arr2.length-1-j;i++){
    if(arr2[i]>arr2[i+1]){
        let temp=arr2[i]
        arr2[i]=arr2[i+1]
        arr2[i+1]=temp
    }
}
   }
   return arr2
}
console.log(mergesort(arr1,arr2))

