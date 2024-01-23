const arr=[2,4,6,7,8,]

// const output=arr.map((item)=>{
//     return item*2
// })
// console.log(output)

// const output= arr.map(tripple)

// function tripple(num){
//     return num*3
// }

// console.log(output);


// const output=arr.reduce((acc,cur)=>{
//    if(cur>acc){
//     acc=cur
//     return  acc
//    }
// },0)
// console.log(output);


const users=[
    {firstname:"mahammad",lastname:"irshad",age:20},
    {firstname:"ismail",lastname:"irfan",age:30},
    {firstname:"yousuf",lastname:"ihsan",age:25},
    {firstname:"ahammad",lastname:"younus",age:20}]

    // const output=users.reduce((acc,curr)=>{
    //     console.log("acc",acc);
    //     console.log("curr",curr);
    //     if(acc[curr.age]){
    //        acc[curr.age]= ++acc[curr.age]
    //     }else{
    //         acc[curr.age]=1
    //     }
    //     console.log("after return",acc)
    //     return acc
    // },{})

    // console.log(output)

 const output=users.filter(item=>item.age<30).map(name=>{return name.firstname})
     
 
 console.log(output)