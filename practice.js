// function one(){
// let a=10;
// let b=20
// let greater =two(a,b) 
// console.log(greater)
// }

// function two(a,b){
//    return Math.max(a,b)
// }

// one()
// function one() {
//    let a = 10;
//    let b = 20;
//    let greaterValue = two(a, b);
//    console.log("Greater value in function two:", greaterValue);
// }

// function two(a, b) {
//    return Math.max(a, b);
// }

// one(); // Call function one to calculate and display the greater value


// var containsDuplicate = function(nums) {
//    console.log(nums)
//    let flag=0
//    for(let i=0;i<nums.length;i++){
//       for(let j=i+1;j<nums.length;j++){
//         if(nums[i]!==nums[j]){
//          continue
//         }else{
//          flag=1
//         }
//       }

// }
// if(flag==0){
//    return false
// }else{
//    return true
// }
// }
// nums = [ 1, 2, 3, 5,8,1,9]
// console.log(containsDuplicate(nums))

// var mergeTwoLists = function(list1, list2) {
//    if (!list1){
//         return list2; 
//    }
//   if (!list2){
//        return list1;
//   } 
//   let len = list1.length;
//   for (let i = 0; i < list1.length; i++) {
//       list2[len + i] = list1[i];
//   }
//   for (let j = 0; j < list2.length - 1; j++) {
//       for (let i = 0; i < list2.length - 1 - j; i++) {
//           if (list2[i] > list2[i + 1]) {
//               let temp = list2[i];
//               list2[i] = list2[i + 1];
//               list2[i + 1] = temp;
//           }
//       }
//   }
//   return list2;
// }
// let arr=[1,1,2,3,4,4]
// mergeTwoLists()

// let strs = ["flower","flow","flight"]
// var longestCommonPrefix = function(strs) {
//    console.log(strs)
//    for(let i=0;i<strs.length;i++){
//      console.log(strs[i])
//      let p=strs[i]
//        for(let k=0;k<p.length;k++){
//          console.log(p[k])
//        }
//    }
// }
//    console.log(longestCommonPrefix(strs))
// Output: 2, nums = [2,2,_,_]

// var removeElement = function(nums, val) {
//     console.log(nums,val)
//     let num=[]
//     let count=0
//     for(let i=0;i<nums.length;i++){
//       if(nums[i]!==val){
//     num.push(nums[i])
//       }else{
//          count++
//       }
//     }
//     for(let i=0;i<count;i++){
//       //  console.log(i)
//       num.push("_")
//     }
//     return num
// };

// nums = [3,2,2,3], val = 3
// console.log(removeElement(nums,val))

// var removeElement = function(nums, val) {

//    for(let i=0;i<nums.length;i++){
//      if(nums[i]!==val){
//    nums.push(nums[i])
//      }
//    }
 
//    return nums
// };

// var removeElement = function(nums, val) {
//    for(let i=0;i<nums.length;i++){
//      if(nums[i]==val){
//        nums.splice(i,1)
//      }
//    }
 
//    return nums.length
// };

// var removeElement = function(nums, val) {
  
//    for(let i=0;i<nums.length;i++){
//        if(nums[i] == val){
//            nums.splice(i,1)
//        }
//    }
//    return nums.length;
// };

// nums =[0,1,2,2,3,0,4,2], val = 2
// console.log(removeElement(nums,val))

// var removeElement = function(nums, val) {
//    for (let i = nums.length - 1; i >= 0; i--) {
//        if (nums[i] === val) {
//            nums.splice(i, 1);
//        }
//    }
//    return nums.length;
// };

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// let val = 2;
// console.log(removeElement(nums, val)); // Output: 5

// var stringMatching = function(words) {
//       console.log(words)
//       let newarr=[]
//       for(let i=0;i<words.length;i++){
//          for(let j=0;j<words.length;j++){
//             if(i!==j&&words[i].includes(words[j])){
//                if(!newarr.includes(words[j])){
//                newarr.push(words[j])
//                }
             
//             }
//          }
//       }
//     console.log("newarr",newarr)
// };
// words = ["mass","as","hero","superhero"]
// stringMatching(words)
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// var stringMatching = function(words) {
//    const result = [];

//    for (let i = 0; i < words.length; i++) {
//        for (let j = 0; j < words.length; j++) {
//            if (i !== j && words[j].includes(words[i])) {
//                result.push(words[i]);
//                break; // Once found as a substring, no need to check further
//            }
//        }
//    }

//    return result;
// };

// let words = ["mass", "as", "hero", "superhero"];
// console.log(stringMatching(words)); // Output: ["as", "hero"]
