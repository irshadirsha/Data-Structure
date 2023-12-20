
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

const fs = require('fs')

fs.writeFile("myFile.js","nocontent",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file created");
    }
})