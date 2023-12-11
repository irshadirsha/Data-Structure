function isPalindromeArray(arr) {
    console.log(arr);
    const strArray = arr.join('');
    console.log(strArray);
    
    const reversedStrArray = strArray.split('').reverse().join('');
    
    return strArray === reversedStrArray;
}

const exampleArray1 = [1, 2, 3, 2, ,7,1];


console.log(isPalindromeArray(exampleArray1)); 

