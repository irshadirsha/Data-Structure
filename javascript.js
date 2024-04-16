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




var maximumNumberOfStringPairs = function(words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].includes(words[j]) || words[j].includes(words[i])) {
                count++;
            }
        }
    }
    return count;
};

let words = ["cd", "ac", "dc", "ca", "zz"];
console.log(maximumNumberOfStringPairs(words)); // Output: 2

