var plusOne = function(digits) {
    console.log(digits)
    let arr=[]
    let number=digits.join('')
    console.log(number);
    let numbers=BigInt(number)
    console.log(numbers);
     arr.push(numbers+1n)
    const num = arr[0].toString().split('').map(Number)
     console.log(arr);
     console.log(num);
     return num

};

digit = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digit))