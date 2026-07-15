const paragraph: string =
  "A Core i-seven laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";

// Extract numbers from paragraph
function extractNumbers(text: string): number[] {
  let numbers: number[] = [];
  let currentNumber: string = "";

  for (let i: number = 0; i < text.length; i++) {
    let char: string = text[i];

    if (char >= "0" && char <= "9") {
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        numbers.push(Number(currentNumber));
        currentNumber = "";
      }
    }
  }

  if (currentNumber !== "") {
    numbers.push(Number(currentNumber));
  }

  return numbers;
}

// Get all numbers from paragraph
let values: number[] = extractNumbers(paragraph);

// Assign values to variables
let laptopPrice: number = values[0];
let mousePrice: number = values[1];
let quantity: number = values[2];
let discountPercent: number = values[3];

// Calculate final price
let totalPrice: number = laptopPrice + mousePrice * quantity;
let discountAmount: number = (totalPrice * discountPercent) / 100;
let finalPrice: number = totalPrice - discountAmount;

// Display result
console.log(finalPrice + " tk");
