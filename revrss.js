// // nput = "Happy Birthday Harry"

// // Output = "yppaH yadhtriB yrraH"
// const str="Happy Birthday Harry"

// const str1=str.split(" ")

// // console.log(str1);
// let joinstr
// let finalstr=""
// for(let i=0;i<str1.length;i++){
//     console.log(str1[i]);
//    let k=str1[i]
// for(let j=k.length-1;j>=0;j--){
//     console.log(k[j]);
//      joinstr+=k[j]
// }
// finalstr+=joinstr
// }

// console.log(finalstr);

// const str ="Happy Birthday Harry";
// const str1 =str.split(" ");
// let finalstr="";

// for (let i = 0; i<str1.length; i++) {
//     let joinstr="";
//     for (let j=str1[i].length-1; j>=0; j--) {
//         joinstr +=str1[i][j];
//     }
//     finalstr +=joinstr +" ";
// }
// console.log(finalstr);


// nput = "Happy Birthday Harry"

// Output = "yppaH yadhtriB yrraH"
// const str="Happy Birthday Harry"
// const str1=str.split(" ")
// console.log(str1);
// let newstr=""

// for(let i=0; i<str1.length;i++ ){
//     let add=""
//     for(j=str1[i].length-1;j>=0;j--){
//      add+=str1[i][j]   
//     }
//     newstr+=add+" " 
// }
// console.log(newstr)

for(let i=0;i<=5;i++){
    let row=""
    for(let k=0;k<=5-i-1;k++){
        row+=" "
    }
    for(j=0;j<=i;j++){
        row+="* "
    }
    console.log(row);
}