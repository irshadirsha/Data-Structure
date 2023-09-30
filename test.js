function binarysearch(arr,target){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        const mid=Math.floor((left+right)/2)

        if(arr[mid]==target){
            return mid
        }else if(arr[mid]<target){
            left=mid+1

        }else{
            right=mid-1
        }
    }
//   return -1
// }
// let arr=[1,3,7,23,67,99]
// console.log(binarysearch(arr,-23))
