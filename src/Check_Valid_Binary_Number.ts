const binary: string = "1001";

let isValid: boolean = true;

// Check each character
for (let i: number = 0; i < binary.length; i++) {
  let char: string = binary[i];

  // If character is not 0 or 1, it's invalid
  if (char !== "0" && char !== "1") {
    isValid = false;
    break; // Stop checking further
  }
}

console.log(isValid);
