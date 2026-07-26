1. Difference Between Maximum and Second Maximum
Given an array of numbers:


const numbers: number[] = [11, 7, 2, 15, 6];

Write a TypeScript program to find the difference between the maximum value and the second maximum value.
Expected Output:
4

2. Sum of Prime Numbers
Given an array of numbers:
const numbers: number[] = [11, 15, 2, 7, 6];

Write a TypeScript program to calculate the sum of all prime numbers in the array.
Expected Output:


20

3. Sum of Unique Elements After Removing Duplicates
Given an array with duplicate values:


const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

Write a TypeScript program to remove duplicate values and calculate the sum of the unique elements.
Expected Output:


41

4. Find the Missing Number
Given an array of numbers:


const numbers: number[] = [0, 1, 2, 4, 5];

Write a TypeScript program to find the missing number using the formula:


n * (n + 1) / 2 - sumOfArray

Expected Output:


3

5. Count Occurrence of Each Number
Given an array with repeating numbers:


const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

Write a TypeScript program to count the occurrence of each number.
Expected Output:


1: 1
2: 2
3: 3
4: 4

6. Return Repetitive Elements
Given an array of numbers:


const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

Write a TypeScript program to return only the elements that appear more than once.
Expected Output:


[4, 6]

7. Print Unique Characters from a String
Given a string:


const text: string = "abcaabbcc";

Write a TypeScript program to print all unique characters and count the total number of unique characters.
Expected Output:


Unique characters: a, b, c
Total unique characters: 3

8. Print All Permutations of a String
Given a string:


const text: string = "cat";

Write a TypeScript program to print all possible permutations of the string and count the total number of permutations.
Expected Output:


Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6

9. Generate a Random Password
Write a TypeScript program to generate a random password with the following rules:


const passwordLength: number = 8;

The password must contain at least:


one uppercase letter
one lowercase letter
one numeric digit
one special character

Example Output:


A9@hjs7K

10. Remove All Special Characters
Given a string:


const text: string = "s@atur!day";

Write a TypeScript program to remove all special characters from the string.
Expected Output:


saturday

11. Remove All Vowels from a String
Given a string:


const text: string = "I am a SQA Engineer";

Write a TypeScript program to remove all vowels from the string.
Expected Output:


m sq ngnr

12. Check Valid Binary Number
Write a TypeScript program to check whether a given string is a valid binary number.
A valid binary number should contain only:


0 and 1

Example 1:


const binary: string = "1001";

Expected Output:


true

Example 2:


const binary: string = "2001";

Expected Output:


false

13. Extract Digits and Calculate Discounted Total
Given a paragraph:


const paragraph: string =
 "A Core i7 laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";

Write a TypeScript program to extract the necessary numeric values from the paragraph and calculate the final cost after applying the discount.
Expected Output:


74375 tk

14. Currency Note Breakdown
Given an amount:


const amount: number = 546;

Available currency notes are:


const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

Write a TypeScript program to break down the amount into the minimum number of currency notes.
Expected Output:


500 x 1
20 x 2
5 x 1
1 x 1

15. Find 5-Mark and 10-Mark Questions
A question paper has total:
const totalQuestions: number = 15;
const totalMarks: number = 100;

Each question can be either:


5 marks or 10 marks

Write a TypeScript program to find how many 5-mark questions and how many 10-mark questions are needed to make exactly 100 marks.
Expected Output:


5-mark questions: 10

