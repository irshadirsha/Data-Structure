// Input: [7, 2, 8, 9, 4, 1]

// Output: 7
const arr=[7, 2, 8, 9, 4, 1]
let small=arr[0]
let large=0
for(let i=0;i<arr.length;i++){
   if(arr[i]>large){
    large=arr[i]
   }
   if(arr[i]<small){
    small=arr[i]
   }

}
let diff=large-small
console.log(large,small)
console.log(diff)