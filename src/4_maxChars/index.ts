// --- Task
// Given a string, return the character that is most commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// #1 Solution
// export const maxChar = (str: string): string => {
//   const charsObj: Record<string, number> = {};

//   for (let char of str) {
//     charsObj[char] = charsObj[char] + 1 || 1;
//   }

//   const sortedEntries = Object.entries(charsObj).sort((a, b) => a[1] - b[1]);

//   return sortedEntries[sortedEntries.length - 1][0];
// }


// max = 0;
/* 
 'hello'
 {
  h: 1,
  e: 1,
  l: 2,
  o: 1,
 }
*/


export const maxChar = (str: string): string => {
  const charsObj: Record<string, number> = {};
  let max: number = 0;
  let maxChar: string = '';

  for (let char of str) {
    charsObj[char] = charsObj[char] + 1 || 1;
  }

  for (let key in charsObj) {
    if (charsObj[key] > max) { // 2 > 1
      max = charsObj[key]; // max = 2
      maxChar = key; // maxChar = 'l'
    }
  }

  return maxChar;
}