// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function to find the sum of prime numbers up to a given limit
  function sumOfPrimes(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  // Example: Find the sum of prime numbers up to 10
  const limit = 10;
  const result = sumOfPrimes(limit);
  
  console.log(`Sum of prime numbers up to ${limit}: ${result}`);
  