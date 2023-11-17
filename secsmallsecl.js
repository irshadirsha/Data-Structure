const arr=[1,42,42,180]
let large=0
let slarge=0
let small=Infinity
let ssmall=Infinity
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
console.log(large);
console.log(slarge);
console.log(small);
console.log(ssmall);