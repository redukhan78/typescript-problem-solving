const totalQuestions: number = 15;
const totalMarks: number = 100;

let fiveMarkQuestions: number = 0;
let tenMarkQuestions: number = 0;

// Try all possible combinations
for (let five: number = 0; five <= totalQuestions; five++) {
  let ten: number = totalQuestions - five;
  let marks: number = five * 5 + ten * 10;

  if (marks === totalMarks) {
    fiveMarkQuestions = five;
    tenMarkQuestions = ten;
    break; // Stop when we find the answer
  }
}

console.log("5-mark questions:", fiveMarkQuestions);
console.log("10-mark questions:", tenMarkQuestions);
