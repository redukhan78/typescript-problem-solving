const text: string = "s@atur!day123";

let result: string = "";

for (let i: number = 0; i < text.length; i++) {
  let char: string = text[i];

  // Keep letters (a-z, A-Z) and numbers (0-9)
  if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    result = result + char;
  }
}

console.log(result); // saturday123
