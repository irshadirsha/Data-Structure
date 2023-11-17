const arr=[5,7,16,2,2]
let large=arr[0]

let sum=0
for( let i=0;i<arr.length;i++){
   if(arr[i]>large){
    large=arr[i]
   }
   sum=sum+arr[i]
   
}
sum=sum-large

if(sum==large){
console.log(true)
}else{
    console.log(false);
}
console.log(sum);
console.log(large);