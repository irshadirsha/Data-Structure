function compare(N, M) {
    function sumOfDigits(number) {
        // console.log(number);
        // console.log(number.toString());
        let sum = 0;
        for (let digit of number.toString()) {
            sum += parseInt(digit);
        }
        // console.log(sum);
        return sum;
    }
    const sumN = sumOfDigits(N);
    const sumM = sumOfDigits(M);
// console.log(sumM);
// console.log(sumN);
    if (sumN > sumM) {
        return N;
    } else if (sumM > sumN) {
        return M;
    } else {
        return -1;
    }
}
console.log(compare(100, 9));
console.log(compare(202, 4));
