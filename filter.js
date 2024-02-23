arr=[2,3,4,5,6,7,8,9]

const res=arr.filter((item)=>{
    // console.log(item)
    if(item%2==0){
        return item
    }
})
console.log(res)