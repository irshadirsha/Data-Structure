// function isPalindromeArray(arr) {
//     console.log(arr);
//     const strArray = arr.join('');
//     console.log(strArray);
    
//     const reversedStrArray = strArray.split('').reverse().join('');
    
//     return strArray === reversedStrArray;
// }

// const exampleArray1 = [1, 2, 3, 3,2,1];


// // console.log(isPalindromeArray(exampleArray1)); 

// function isPalindromeArray(arr) {
//     console.log(arr);
//     // Create a copy of the original array
//     const reversedArr = [...arr];
//     // Reverse the copy of the array
//     reversedArr.reverse();
    
//     // Loop through the original array and compare each element with its corresponding element in the reversed array
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== reversedArr[i]) {
//             return false; // If any elements don't match, it's not a palindrome
//         }
//     }
    
//     return true; // If all elements match, it's a palindrome
// }

// const exampleArray1 = [1, 2, 3, 3, 2,3, 1];

// console.log(isPalindromeArray(exampleArray1));

function isPalindrome(str) {
    // Convert the string to an array of characters
    const arr = str.split('');
    
    // Initialize pointers for the beginning and end of the string
    let start = 0;
    let end = arr.length - 1;
    
    // Loop until the pointers meet in the middle
    while (start < end) {
        // Check if characters at start and end pointers are equal
        if (arr[start] !== arr[end]) {
            return false; // If not equal, it's not a palindrome
        }
        // Move pointers towards the middle
        start++;
        end--;
    }
    
    return true; // If the loop completes, it's a palindrome
}

const str = "malayalamm";

console.log(isPalindrome(str));
