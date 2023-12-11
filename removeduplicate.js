const arr = [3,8, 4, 5, 4, 5, 7,8, 8];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isDuplicate = true;                 
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr); 

// const arr = [3,8, 4, 5, 4, 5, 7,8, 8];

// const unique=[]
// for(let i=0;i<arr.length;i++){
//   let isDuplicate=false
//   for(let j=0;j<unique.length;j++){
//     if(arr[i]===unique[j]){
//       isDuplicate=true
//       break;
//     }
//   }
//   if(isDuplicate===false){
//      unique.push(arr[i])
//   }
// }
// console.log(unique);

