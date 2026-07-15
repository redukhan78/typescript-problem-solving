const numbers: number[] = [11, 7, 2, 15, 6];

let max: number = numbers[0]!;
for (let i: number = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

let secondMax: number = numbers[0]!;
for (let i: number = 1; i < numbers.length; i++) {
  if (numbers[i] > secondMax && numbers[i] < max) {
    secondMax = numbers[i];
  }
}

const diff: number = max - secondMax;
console.log(diff);
