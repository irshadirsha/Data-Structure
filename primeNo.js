const arr=[2,4,5,6,7,8,9,10,11,12,13,14]
const prime=[]
const nonprime=[]
for(let i=0;i<arr.length;i++){
    let flag=0
    for(let j=2;j<arr[i];j++){
        if(arr[i]%j==0){
            flag=1
            break
        }
    }
    if(flag==0){
        console.log("prime",arr[i]);
        prime.push(arr[i])
    }else{
        console.log("non prome",arr[i]);
        nonprime.push(arr[i])
    }
}
console.log(prime);
console.log(nonprime);