function insertionSort(arr){
     for(i=1;i<arr.length;i++){
        let current=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=current
     }
     return arr
}
let array=[3,12,5,4,7,9,88,11,21]
console.log(insertionSort(array));
 
