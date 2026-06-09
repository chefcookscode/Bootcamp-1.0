/*
  Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

  Note:
  - The function should count all characters, including spaces and special characters.
  - The function should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countChar`
*/

// const countCharacters = (statement) => {
//   let result = {};
//   for (let i = 0; i < statement.length; i++) {
//     let char = statement.charAt(i);
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// };
// module.exports = countCharacters;

function countCharacters(str) {
  const frequencyMap = {};

  for (const char of str) {
    // If the character already exists in the object, increment its count; 
    // otherwise, initialize it to 1.

    // frequencyMap[char] = (frequencyMap[char] || 0) + 1;

    if (frequencyMap[char]) {
    // If the character already exists, increment its count by 1
      frequencyMap[char] += 1;
    } else {
    // If the character is not in the object yet, initialize it at 1
      frequencyMap[char] = 1;
    }

  }

  return frequencyMap;
}

// --- Test Cases ---
console.log(countCharacters("hello"));    // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(countCharacters("aabbcc"));   // Output: { a: 2, b: 2, c: 2 }
console.log(countCharacters(""));         // Output: {}
console.log(countCharacters("a b !"));    // Output: { a: 1, ' ': 2, b: 1, '!': 1 }