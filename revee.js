let str='hi irshad'
// let reverse=''
// let revstr=str.split('').reverse().join('')

const { resolve, reject } = require("promise");

// console.log(revstr)

// ih dahsri
let a=str.split(' ')
console.log(a);

 const reverse=  str.split('').map(item=>item.split().reverse().join('')).join(' ')

// console.log(reverse)

function add(num1,num2){
     return new Promise((resolve,reject)=>{
        if(num1==10){
            reject("its a errror")
        }
         resolve(num1+num2)
     })
}


add(10,20).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

add(10,20).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


