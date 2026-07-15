const passwordLength: number = 8;

// Step 1: Define character sets
let uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase: string = "abcdefghijklmnopqrstuvwxyz";
let numbers: string = "0123456789";
let special: string = "!@#$%^&*()";
let allChars: string = uppercase + lowercase + numbers + special;

// Step 2: Function to get random character
function randomChar(chars: string): string {
  let index: number = Math.floor(Math.random() * chars.length);
  return chars[index];
}

// Step 3: Build password with required characters
let password: string = "";
password = password + randomChar(uppercase); // One uppercase
password = password + randomChar(lowercase); // One lowercase
password = password + randomChar(numbers); // One number
password = password + randomChar(special); // One special

// Step 4: Fill remaining positions
for (let i: number = 4; i < passwordLength; i++) {
  password = password + randomChar(allChars);
}

// Step 5: Shuffle the password
let passwordArray: string[] = [];
for (let i: number = 0; i < password.length; i++) {
  passwordArray.push(password[i]);
}

for (let i: number = passwordArray.length - 1; i > 0; i--) {
  let j: number = Math.floor(Math.random() * (i + 1));
  let temp: string = passwordArray[i];
  passwordArray[i] = passwordArray[j];
  passwordArray[j] = temp;
}

let finalPassword: string = "";
for (let i: number = 0; i < passwordArray.length; i++) {
  finalPassword = finalPassword + passwordArray[i];
}

console.log(finalPassword);
