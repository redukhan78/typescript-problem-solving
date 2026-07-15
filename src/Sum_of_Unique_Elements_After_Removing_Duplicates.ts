const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

let uniqueNumbers: number[] = [];
let sum: number = 0;

// Check each number
for (let i: number = 0; i < numbers.length; i++) {
  let isDuplicate: boolean = false;

  // Check if number already exists in uniqueNumbers
  for (let j: number = 0; j < uniqueNumbers.length; j++) {
    if (numbers[i] === uniqueNumbers[j]) {
      isDuplicate = true;
      break;
    }
  }

  // If not a duplicate, add to unique array and sum
  if (!isDuplicate) {
    uniqueNumbers.push(numbers[i]);
    sum = sum + numbers[i];
  }
}

console.log(sum);
