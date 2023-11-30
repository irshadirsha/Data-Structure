// const arr=[3,6,8,9,7]
// let close=arr[0]
// let diff=0
// for(let i=0;i<arr.length;i++){
//     let dif=0
//     for(let j=0;arr[i];j++){
//     if(arr[i]!=arr[j]){
//        dif++
//     }else{
//         break;
//     }
//     if(diff>dif){
//         diff=dif
//         close=arr[i]
//     }
// }
// }
// console.log(close);

// const arr = [3, 6, 8, 9,1, 7];
// let close = arr[0];
// let diff = Math.abs(0 - arr[0]);

// for (let i = 1; i < arr.length; i++) {
//     let currentDiff = 0;

//     if (0 > arr[i]) {
//         currentDiff = 0 - arr[i];
//     } else {
//         currentDiff = arr[i];
//     }

//     if (currentDiff < diff) {
//         diff = currentDiff;
//         close = arr[i];
//     }
// }

// console.log(close);

// var reversePrefix = function(word, ch) {
// //  console.log(word,ch);
//  let rev=[]
//  let a=null
//  for (let i = 0; i < word.length; i++) {
//     if (word[i]==ch) {
//         a=i
//         break;
//     }
// }
// if (a) {
   
//     for (let i = a; i >=0; i--) {
//         rev.push(word[i])
//     }


//     let st='';

//     for (let index = 0; index < rev.length; index++) {
//     st+=rev[index];        
//     }


//     for (let i = a; i < word.length; i++) {
//     if(a<i){
//         st+=word[i]
//     }        
//     }

// return st 
// }

// return word


 
// };

// console.log( reversePrefix("xyxzxe","m"))


var isPalindrome = function(s) {
   const arr=[...s]
   const newarr=[]
   const newarr2=[]
    console.log(s);
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==" " && arr[i]!==","){
            newarr.push(arr[i])
        }
    }
    console.log(newarr);
    for(let i=newarr.length-1;i>=0;i--){
        newarr2.push(newarr[i])
    }
    console.log(newarr2);
    if(newarr===newarr2){
        console.log("true");
    }else{
        console.log("false");
    }
};


    isPalindrome("A man, a plansssas, a canal Panama")