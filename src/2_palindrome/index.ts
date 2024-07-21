// --- Task
// Return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reversed. 
// Include spaces and punctuation in determining if the string is a palindrome.

// --- Examples:
//   palindrome("appa") === true
//   palindrome("qwerty") === false

// #1 Solution
// export const palindrome = (str: string): boolean => {
//   const reversedString = str.split('').reverse().join('');

//   return str === reversedString;
// }

// #2 Solution
// export const palindrome = (str: string): boolean => {
//   const reversedString = str.split('').reduce((rev, char) => char + rev, '');

//   return str === reversedString;
// };

// #3 Solution
export const palindrome = (str: string): boolean => {
  let reversedString = '';

  for (let char of str) {
    reversedString = char + reversedString;
  }

  return str === reversedString;
}