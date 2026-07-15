const text: string = "I am a SQA Engineer";

let result: string = "";

for (let i: number = 0; i < text.length; i++) {
  let char: string = text[i];
  let lowerChar: string = char.toLowerCase(); // ← Has ()

  if (
    lowerChar !== "a" &&
    lowerChar !== "e" &&
    lowerChar !== "i" &&
    lowerChar !== "o" &&
    lowerChar !== "u"
  ) {
    result = result + lowerChar; // Add lowercase version
  }
}

console.log(result); // " m  sq ngnr"
