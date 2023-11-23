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

// const arr=[1,3,5,7,9,[45,66,88]]

// const copy=JSON.parse(JSON.stringify(arr))
// copy[5].push(9999)

// console.log(copy)
// console.log(arr)
// const promise = require('promise')
// function add(num1,num2){
//     return new Promise ((resolve,reject)=>{
//       if(num1=0){
//         reject("errro occur")
//       }else{
//         resolve(num1+num2)
//       }
//     })
// }

// add(10,30).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


const Promise=require('promise')
// function add(num1,num2){
//      return new Promise((resolve,reject)=>{
//         if(num1==0){
//             reject("first number is zero")
//         }
//       resolve(num1+num2)
//      })
// }

// function multiply(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1  ==0){
//             reject("first number is zero")
//         }
//         resolve(num1*num2)
//     })
// }

// function div(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1==0){
//             reject("first number is zero")
//         }
//         resolve(num1/num2)
//     })
// }

// add(10,20).then((sum)=>{
//     console.log(sum)
//     return multiply(sum,sum)
// }).then((product)=>{
//     console.log(product)
//     return div(product,10)
// }).then((answer)=>{
//     console.log(answer)
// })
// .catch((err)=>{
//     console.log(err)
// })



// function getName(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("irshad")
//        },3000)
//     })
// }
// function getAdd(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve("alike")
//         },4000)
//     })
// }

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("09876543")
//         },5000)
//     })
// }


// Promise.any([getName(),getAdd(),getNum()]).then((ans)=>{
//     console.log(ans)
// }).catch((err)=>{
//     console.log(err);
// })

// async function display(){
//     const fname=await getName()
//     const address=await getAdd()
//     const num=await getNum()
//     console.log(fname);
//     console.log(address);
//     console.log(num);
// }
// display()

// setTimeout(()=>{
//     console.log("its first one")
// },3000)

// const myFunction=()=>{
//     console.log("delayed message");
// }
// const delay=2000

// const timeoutId=setInterval(myFunction,delay)


// let d=""
// for(let i=5;i>=1;i--){
//     for(j=1;j<=i;j++){
//        d+=j
//     }
//     console.log(d)
//     d=""
// }


// arr=[0,1,2,3,4,5,6,7,8]
// let even=[]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//    even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }
// console.log(even);
// console.log(odd);

// arr=[0,1,2,3,4,5,6,7,8]
// let prime=[]
// for(i=0;i<arr.length;i++){
//     let flag=0
//      for(let j=2;j<arr[i];j++){
//           if(arr[i]%j==0){
//            flag=1
//            break
//           }
//         }
//         if(flag==0 && arr[i]>1){
//           prime.push(arr[i])
//         }
// }
// console.log(prime);




// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// let prime = [];

// for (let i = 0; i < arr.length; i++) {
//     let flag = 0; // Reset the flag for each iteration

//     for (let j = 2; j < arr[i]; j++) {
//         if (arr[i] % j === 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (flag === 0 && arr[i] > 1) {
//         prime.push(arr[i]);
//     }
// }

// console.log(prime);



//    let flag=0
//     for(let i=0;i<arr.length;i++){
    //         if(arr[i]<arr[i+1]){
        //             continue
        //         }else{
            //             if(arr[i]>arr[i+1]){
                //                 flag=1
//             }
//         }
//     }
//     if(flag==1){
    //         console.log("mountain array");
    //     }else{
        //         console.log("not mountain");
        //     }
        
        const arr=[2,4,3]
          let mon=true
        for(let i=0;i<arr.length;i++){
            if(arr.length < 3 || arr[0]>arr[1]){
                mon = false 
                break
            }
            if(mon && arr[i]>arr[i+1]){
                mon = false
            }
            if(!mon && arr[i]<arr[i+1]){
                mon = fasle
            }
        }

        if(mon==true){
            console.log("Is mountain");
        }else{
            console.log("Not mountain");
        }