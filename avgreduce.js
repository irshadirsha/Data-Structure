// const arr=[2,3,4,5,6,7,8,9]
let arr = [10, 20, 30, 40, 50];


const sum=arr.reduce((acc,cur)=>{
    return acc=acc+cur
},0)
let avg=sum/arr.length

console.log(avg)