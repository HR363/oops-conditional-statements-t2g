// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;

  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

// 1. Check if a specific number is prime
const inputNumber = 29;
if (isPrime(inputNumber)) {
  console.log(`${inputNumber} is a prime number.`);
} else {
  console.log(`${inputNumber} is not a prime number.`);
}



