
// function display(name){
//     console.log(name);
// }
// function print(callabck){
//     callabck("irshad")
// }
// print(display)

// const { resolve, reject } = require("promise");

// // function f(n){
// //     if(n==0){
// //         return 1
// //     }else{
// //         return n*f(n-1)
// //     }
// // }
// // console.log(f(5));

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a<0){
//            reject("Negetive number")
//         }else{
//             resolve(a+b)
//         }
//     } )
// }
// function multi(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a<0){
//            reject("Negetive number")
//         }else{
//             setTimeout(()=>{
//                 resolve(a*b)
//             },3000)
//         }
//     } )
// }
// // add(10,20).then((res)=>{
// //     console.log(res);
// //     multi(res,2).then((ans)=>{
// //         console.log(ans);
// //     })
// // }).catch((err)=>{
// //    console.log(err);
// // })
// const promise1 = add(-10, 20);
// const promise2 = multi(5, 2);

// // Promise.all
// Promise.all([promise1, promise2])
//     .then((results) => {
//         console.log("Promise.all result:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.all error:", err);
//     });

//     const promise3 = add(30, 40);
// const promise4 = multi(3, 2);

// Promise.race([promise3, promise4])
//     .then((result) => {
//         console.log("Promise.race result:", result);
//     })
//     .catch((err) => {
//         console.log("Promise.race error:", err);
//     });
//     const promise5 = add(-50, 60);
//     const promise6 = multi(-4, 2);

//     Promise.any([promise5, promise6])
//         .then((result) => {
//             console.log("Promise.any result:", result);
//         })
//         .catch((err) => {
//             console.log("Promise.any error:", err);
//         });

// const fs = require('fs')

// fs.readFile("myFile.js","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// let fruits = ['apple', 'banana', 'cherry', 'date'];

// // Create a new array containing elements from index 1 to (but not including) index 3
// let slicedFruits = fruits.slice(2, 3);

// console.log(slicedFruits); // Output: ['banana', 'cherry']
// console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']


// let numbers = [1, 2, 3, 4, 5];

// const double= numbers.map((element)=>element*2)
// console.log(double);
//  let numbers = [1, 2, 3, 4, 5]

//  const sum=numbers.reduce((acc,cur)=>acc*cur)

//  console.log(sum);

// const http=require ('http')

// http.createServer((req,res)=>{
//      res.write("ijts my server")
//      res.end()
// }).listen(3000)

// const express = require('express')
// const app=express()
// const port=4000
// app.listen(port,()=>{
//     console.log("server started");
// })
// app.get('/',(req,res)=>{
//     const a=[2,3,5,6,7,8,6]
//     res.send(a)
// })


const arr = ['4','3','k','10','5','h','p','1'];
let sum=0
const  number=[]
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    const num=parseInt(arr[i])
    console.log(num);
    if(isNaN(num)){
        continue
    }else{
        number.push(num)
        sum=sum+num
    }
}
console.log(number);
console.log(sum);
