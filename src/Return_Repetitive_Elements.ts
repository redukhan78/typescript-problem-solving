const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

let counts: { [key: number]: number } = {};
let repetitive: number[] = [];

// Count occurrences of each number
for (let i: number = 0; i < numbers.length; i++) {
  let num: number = numbers[i];

  if (counts[num]) {
    counts[num] = counts[num] + 1;
  } else {
    counts[num] = 1;
  }
}

// Find numbers that appear more than once
for (let num in counts) {
  if (counts[num] > 1) {
    repetitive.push(Number(num));
  }
}

console.log(repetitive);
