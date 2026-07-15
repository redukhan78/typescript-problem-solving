const amount: number = 546;
const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

let remaining: number = amount;

for (let i: number = 0; i < notes.length; i++) {
  let note: number = notes[i];
  let count: number = Math.floor(remaining / note);

  if (count > 0) {
    console.log(note + " x " + count);
    remaining = remaining - note * count;
  }
}
