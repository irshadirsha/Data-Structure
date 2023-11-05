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
  return -1
}

let arr=[1,3,7,23,67,99]
console.log(binarysearch(arr,-23))
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

