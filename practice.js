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


// var commonChars = function(words) {
//    console.log("log words",words)
//    let newarr=[]
//    let str=words[0]
//    for(let i=0;i<str.length;i++){
//       console.log("first loop i--",str[i]);
//       let flag=0
//       for(let j=1;j<words.length;j++){
//       console.log("second loop i--",words[j]);

//          if(!words[j].includes(str[i])){
//             flag=1
//          }else{
//             words[j]=words[j].replace(str[i],"")
//          }
//       }
//       console.log(flag);
//       if(flag==0){
//       newarr.push(str[i])
//       }
//    }
//    console.log(newarr);
// };
// words = ["cool","lock","cook"]
// commonChars(words)
// // Output: ["e","l","l"]



// var minDeletionSize = function(strs) {
    
// let count =0
// let row = strs.length
// let col = strs[0].length

// for(let  i =0 ; i< col ; i ++){
// for(let j =0 ; j < row-1 ; j++){
//    if(strs[j][i] > strs[j+1][i]) {
//       count++
//    break
//    }
// }
// }

// return count
// };

// strs=  ["zyx","wvu","tsr"]

// console.log(minDeletionSize(strs))

// var mostCommonWord = function(paragraph, banned) {
//    //  return [paragraph, banned]
//    let pasage=paragraph.toString()
//    console.log(pasage);
//   let total=0
//    for(let i=0;i<pasage.length;i++){
//       console.log(pasage[i]);
//       if(pasage[i]!==banned){
//          let count=0
//          for(let j=0;j<pasage.length;j++){
//             console.log("j loop",pasage[j]);
//            if(pasage[i]==pasage[j]){
//             count ++
//            }
//          }
//        if(count > total){
//          total=count
//        }
//       }

    
//    }
//    return total
// };

//  paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", 
//  banned = ["Bob"]
//  console.log(mostCommonWord(paragraph,banned))

// // Output: "ball"


// var firstPalindrome = function(words) {
//    // console.log(words)
//    for(let i=0;i<words.length;i++){
//       // console.log(words[i])
//       let rev=words[i].split("").reverse().join("")
//       // console.log("rev",rev);
//       if(words[i]==rev){
//          return rev
//       }
//    }

// };
// words = ["abc","car","ada","racecar","cool"]
// console.log(firstPalindrome(words))
// // Output: "ada"

// var arrayStringsAreEqual = function(word1, word2) {
//     console.log(word1, word2)
//    let words1=word1.join("")
//    let words2=word2.join("")
//    console.log(words1,words2);
//    if(words1==words2){
//       return true
//    }else{
//       return fase
//    }
// };
//  word1 = ["ab", "c"], word2 = ["a", "bc"]
//  console.log(arrayStringsAreEqual(word1,word2))
// // Output: true

// var countConsistentStrings = function(allowed, words) {
//    let count = 0
//     for(let i=0;i<words.length;i++){
//       let word=words[i]
//       let consistent=true
//       for(let j=0;j<word.length;j++){
//          if(!allowed.includes(word[j])){
//             consistent=false
//             break
//          }
//       }
//       if(consistent==true){
//          count ++
//       }
//     }
//     return count
  
// };
// let allowed = "cad"
// let words = ["cc","acd","b","ba","bac","bad","ac","d"]
// console.log(countConsistentStrings(allowed,words))

// var findWordsContaining = function(words, x) {
//     console.log(words,x);
//     let arr=[]
//     for(let i=0;i<words.length;i++){
//       if(words[i].includes(x)){
//          arr.push(i)
//       }
//     }
//     return arr
// };
//  words = ["leet","code"], x = "e"
//  console.log(findWordsContaining(words,x))
// Output: [0,1]


var sortPeople = function(names, heights) {
    console.log(names,heights)

    for(let i=0;i<heights.length;i++){
      for(let j=i+1;j<heights.length;j++){
            if(heights[i]<heights[j]){
             let  temp=names[i]
             names[i]=names[j]
             names[j]=temp
            }
      }
    }
    return names
};
names = ["Mary","John","Emma"], heights = [180,165,170]
console.log(sortPeople(names,heights))
// Output: ["Mary","Emma","John"]