// let people = [
//     { name: 'Blice', age: 25 },
//     { name: 'Aob', age: 30 },
//     { name: 'Dharlie', age: 20 },
//     { name: 'Cavid', age: 35 }
// ];

// people.sort((a,b)=>a.age-b.age)
// console.log(people)

function tax(income){
    let taxamount=0;
    const slabs=[{min:0,max:10000, rate:0},
    {min:10001,max:30000, rate:0.1},
    {min:30001,max:50000, rate:0.2},
    {min:50001,max:100000, rate:0.3}]

for(let i=0;i<slabs.length;i++){
    const slab=slabs[i]
    if(income>slab.max){
        taxamount+=(slab.max-slab.min)*slab.rate
        console.log(taxamount)
    }else{
        taxamount+=(income-slab.min)*slab.rate
        break
    }
}
return taxamount
}
let income=40000
console.log(tax(income))