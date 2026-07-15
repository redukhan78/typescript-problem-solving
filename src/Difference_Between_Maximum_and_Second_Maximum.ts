const numbers: number[] = [11, 7, 2, 15, 6];

// Find maximum
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }
}
// Find second maximum
let secondMax = numbers[0];
for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > secondMax && numbers[i] < max) {
        secondMax = numbers[i];
    }
}

const difference = max - secondMax;


console.log(difference);