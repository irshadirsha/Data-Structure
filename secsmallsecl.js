const arr=[10,3,5,66,42]
let large=0
let slarge=0
let small=arr[0]
let ssmall=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        slarge=large
        large=arr[i]
    }else{
        if(arr[i]>slarge){
            slarge=arr[i]
        }
    }
    
    if(arr[i]<small){
        ssmall=small
        small=arr[i]
    }else{
        if(arr[i]<ssmall){
            ssmall=arr[i]
        }
    }
}
let sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]!==ssmall && arr[i]!==slarge){
        sum=sum+arr[i]
    }
}
console.log(slarge);
console.log(ssmall);
console.log(sum);