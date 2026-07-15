const numbers: number[] = [0, 1, 2, 4, 5];

// Step 1: Find n (should be 5 because numbers are 0 to 5)
let n: number = numbers.length;

// Step 2: Calculate expected sum using formula
let expectedSum: number = (n * (n + 1)) / 2;
// 5 * 6 / 2 = 30 / 2 = 15

// Step 3: Calculate actual sum of array
let actualSum: number = 0;
for (let i: number = 0; i < numbers.length; i++) {
  actualSum = actualSum + numbers[i];
}
// 0 + 1 + 2 + 4 + 5 = 12

// Step 4: Find missing number
let miss: number = expectedSum - actualSum;
// 15 - 12 = 3

console.log(miss); // 3
