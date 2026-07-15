const text: string = "abcaabbcc";

let uniqueChars: string[] = [];

// Check each character
for (let i: number = 0; i < text.length; i++) {
  let char: string = text[i];
  let isDuplicate: boolean = false;

  // Check if character already in uniqueChars
  for (let j: number = 0; j < uniqueChars.length; j++) {
    if (uniqueChars[j] === char) {
      isDuplicate = true;
      break;
    }
  }

  // If not duplicate, add to uniqueChars
  if (!isDuplicate) {
    uniqueChars.push(char);
  }
}

// Display results
console.log("Unique characters:", uniqueChars.join(", "));
console.log("Total unique characters:", uniqueChars.length);
