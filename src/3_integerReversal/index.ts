// --- Task
// Given an integer, return an integer that is the reverse ordering of numbers.

// --- Examples
//   reverseInt(15) === 51
//   reverseInt(-981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// #1 Solution
export const reverseInt = (n: number): number => {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}