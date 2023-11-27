// const arr=[2,4,6,8,9,90]
// let tar=9
// let newarr=[]
// let flag=0
// for(let i=0;i<arr.length;i++){
    
//     if(arr[i]!==tar){
//  newarr.push(arr[i])
//     }

// }
// console.log(newarr);

// const arr=[2,3,4,4,5,6,6,6,7]
// const newarr=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1]){
//         if(!newarr.includes(arr[i])){
//             newarr.push(arr[i])

//         }
//     }
// }
// console.log(newarr);


// const arr=[2,0,1,0,4,5,0,7,8,0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         for(let j=i;j<arr.length;j++){
//             arr[j]=arr[j+1]
//         }  
//         arr[arr.length-1]=0 
//         }
// }
// console.log(arr);

// const arr1=[2,0,1,0,4,5,0,7,8,0]


// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]==0){
//         for(let j=i;j>0;j--){
//             arr1[j]=arr1[j-1]
//         }
//         arr1[0]=arr1[i]
//     }
// }
// console.log(arr1);

// const arr1 = [2, 0, 1, 0, 4, 5, 0, 7, 8, 0];
// let tar = 5;
// let value = 100;
// for (let i = 0; i < arr1.length; i++) {
//     if (i === tar) {
//         arr1.push(value); 
//         for (let j = arr1.length - 1; j > i; j--) {
//             let temp = arr1[j];
//             arr1[j] = arr1[j - 1];
//             arr1[j - 1] = temp;
//         }
//         break;
//     }
// }
// console.log(arr1);

// const arr=[3,5,2,7,1,9,88,45]

// for(let i=0;i<arr.length;i++){
//     let min = i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min] && i!==j){
//             min = j
//         }
//     }
//     if(min!==i){
//         let temp=arr[i]
//         arr[i]=arr[min]
//         arr[min]=temp
//     }
// }
// console.log(arr);


// let  arr=[3,4,6,8,0,9,-1,2,55]
// let temp
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//          if(arr[j]>arr[j+1]){
//             temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//          }
//     }
// }
// console.log(arr);

// let  arr=[3,4,6,8,9,1,2,55]

// for(let i=0;i<arr.length;i++){
//      for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr);

