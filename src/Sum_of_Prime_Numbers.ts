const numbers: number[] = [11, 15, 2, 7, 6];

// Check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i: number = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Add up all prime numbers
let sum: number = 0;
for (let i: number = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    sum = sum + numbers[i];
  }
}

console.log(sum);
