// function bubblesort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// array=[11,522,3,8,6,99,33]
// console.log(bubblesort(array))

// array=[11,522,3,8,6,99,33]

// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length-i-1;j++){
//         if(array[j]>array[j+1]){
//             let temp=array[j]
//             array[j]=array[j+1]
//             array[j+1]=temp
//         }
//     }
// }
// console.log(array);

// const arr1=[1,3,5,7,9]
// const arr2=[2,4,6,8,0]
// const newarr=[]
// for(let i=0;i<arr2.length;i++){
//     arr1.push(arr2[i])
//     // newarr.push(arr2[i])
// }
// console.log((arr1));

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// const newarr=[...array1,...array2,...array3]

// console.log(newarr);

// const fs=require('fs')

// fs.unlink("changednamee",(err)=>{
//      if(err){
//         console.log(err);
//      }else{
//         console.log(" successss");
//      }
// })

// function display(name){
//     console.log(name);
// }
// function print(callback){
//     callback("irshad")
// }
// print(display)

// const arr=[1,3,5,7,9,[45,66,88]]

// const copy=[]=arr
// copy[5].push(10)
// console.log(copy);
// console.log(arr);

const arr=[1,3,5,7,9,[45,66,88]]

const copy=JSON.parse(JSON.stringify(arr))
copy[5].push(9999)

console.log(copy)
console.log(arr)