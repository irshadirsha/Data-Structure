const arr = [3, 4, 5, 4, 5, 7, 8];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  // Check if the current element is a duplicate
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isDuplicate = true;
      break;
    }
  }

  // If it's not a duplicate, add it to the uniqueArr
  if (!isDuplicate) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr); // Output: [3, 4, 5, 7, 8]
