
const arr = [3,8, 4, 5, 4, 5, 7,8, 8];

const newarr=[]
const rem=[]
for(let i=0;i<arr.length;i++){
    flag=0
    for(let j=0;j<newarr.length;j++){
        if(arr[i]==newarr[j]){
            flag=1;
            break
        }
    }
    if(flag==0){
        newarr.push(arr[i])
    }else{
        rem.push(arr[i])
    }
}
console.log(newarr)
console.log(rem)