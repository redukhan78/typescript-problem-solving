const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// Object to store counts
let counts: { [key: number]: number } = {};

// Loop through each number
for (let i: number = 0; i < numbers.length; i++) {
  let currentNumber: number = numbers[i];

  // Check if number already exists in counts
  if (counts[currentNumber] === undefined) {
    // First time seeing this number
    counts[currentNumber] = 1;
  } else {
    // Already seen this number, increment count
    counts[currentNumber] = counts[currentNumber] + 1;
  }
}

// Print results
console.log("1:", counts[1]);
console.log("2:", counts[2]);
console.log("3:", counts[3]);
console.log("4:", counts[4]);
