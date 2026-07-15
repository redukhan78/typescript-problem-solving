const text: string = "cat";

function getPermutations(str: string): string[] {
  let results: string[] = [];

  // If string has 1 character, return it
  if (str.length === 1) {
    return [str];
  }

  // For each character, fix it and permute the rest
  for (let i: number = 0; i < str.length; i++) {
    let currentChar: string = str[i];
    let remainingChars: string = str.slice(0, i) + str.slice(i + 1);

    // Get all permutations of remaining characters
    let subPerms: string[] = getPermutations(remainingChars);

    // Add current character to each sub-permutation
    for (let j: number = 0; j < subPerms.length; j++) {
      results.push(currentChar + subPerms[j]);
    }
  }

  return results;
}

let result: string[] = getPermutations(text);
console.log("Permutations:", result.join(", "));
console.log("Total permutations:", result.length);
