const arr=[2,3,4,2,3,6,7,6]
// let count=0;
// arr.reduce((acc,cur)=>{
//      if(acc==cur){
//         count++
//      }

// },0)
// console.log(count)
function countOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        console.log(acc[curr]);
        // console.log(curr);
        return acc;
    }, {});
}
// console.log(countOccurrences(arr))
function countOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        console.log(acc[curr]);
        // console.log(curr);
        return acc;
    }, {});