// console.log(1 +  "2" + "2"); 
// console.log(1 +  +"2" + "2"); 
// console.log(1 +  -"1" + "2"); 
// console.log(+"1" +  "1" + "2"); 
// console.log( "A" - "B" + "2"); 
// console.log( "A" - "B" + 2); 


// for (var i = 0; i < 5; i++) {
//    console.log(i)
//    continue
//    console.log(i)
//   }
  

// const a=10;
// const b=40;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

// let a = 2;
// let b = 50;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("a =", a); // Output: 10
// console.log("b =", b); // Output: 5


// var maximumNumberOfStringPairs = function(words) {
//     console.log(words);
//     let count=0
//     for(let i=0;i<words.length;i++){
//         console.log(words[i])
//        for(let j=i+1;j<words.length;j++){
//         if(words[i].includes(words[j]) || words[j].includes[words[i]]){
//             count ++
//         }
//        }
//     }
//     return count
// };
// words = ["cd","ac","dc","ca","zz"]
// console.log(maximumNumberOfStringPairs(words))
// // Output: 2



// var moveZeroes = function(nums) {
//     console.log(nums);
//     let newnum=[]
//     let count =0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==0){
//             count++
//         }else{
//             newnum.push(nums[i])
//         }
//     }
//     for(let i=0;i<count;i++){
//         newnum.push(0)
//     }
//     return newnum
// };
// let nums = [0,1,0,0,9,0,7,0,7,0,3,12]
// console.log(moveZeroes(nums))
// // Output: [1,3,12,0,0]


var moveZeroes = function(nums) {
    let count = 0;
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not 0, swap it with the element at index 'count'
        if (nums[i] !== 0) {
            let temp = nums[count];
            nums[count] = nums[i];
            nums[i] = temp;
            count++;
        }
    }
    return nums;
};

// Test cases
console.log(moveZeroes([0,1,0,3,12])); // Output: [1,3,12,0,0]
console.log(moveZeroes([0])); // Output: [0]
