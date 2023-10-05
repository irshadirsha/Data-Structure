// let arr=["apple","mango",'irshad']

// let newarr=[]
// let k=0
// for(let i=0;i<arr.length;i++){
//     let a=[...arr[i]]
//     console.log(a)
//     let str=""
//     for(let i=a.length-1;i>=0;i--){
//        str+=a[i]
//     }
//     newarr[k]=str
//     k++
//     }
// console.log(newarr);
    
 //   if(i==0){
    //    c=arr[i]
    //    n=arr[i+1]
    //     loger(n,c)
    //   }
// let arr=[1,3,5,6,3,4]
// for(let i=0;i<arr.length;i++){
//     let c;
//     let n
//     if(arr[i]%2==0){
//         console.log("even",arr[i]);
//         c=arr[i]
//         n=arr[i+1]
//          loger(n,c)
//     }else{
//         console.log("odd",arr[i]);
//         c=arr[i+1]
//         n=arr[i-1]
//          loger(n,c)
//     }
   
// }
// function loger(c,n){
//     for(let i=0;i<c;i++){
//         console.log(n)
//     }
// }

// let arr=[3,2,1,4,5,7]
// let len=arr.length-1

// for( let i=0;i<arr.length;i+=2){
//     if(arr[i]==arr[len]){
//         console.log(arr[i])
//         break;
//     }
//     for(let j=0;j<arr[i+1];j++){
//         console.log(arr[i]);
//     }
//     for(let j=0;j<arr[i];j++){
//         console.log(arr[i+1])
//     }
// }



function sumOfDigits(n) {
    // Base case: If n is a single digit, return n itself
    if (n < 10) {
      return n;
    } else {
      // Recursively sum the digits of n
      return (n % 10) + sumOfDigits(Math.floor(n / 10));
    }
}
const number = 12345;
  console.log(sumOfDigits(number))
  // Test the function
//   const result = sumOfDigits(number);
//   console.log(`Sum of digits of ${number} is ${result}`);
  