// Task
// Given a string, return a new string with the reversed order of characters

// Examples
//   reverse('apple') === 'elppa' ['a', 'p', 'p', 'l', 'e'];
//   reverse('hello') === 'olleh'
//   reverse('Happy!') === '!yppaH'

// #1 Solution
export const reverse = (str: string): string => {
  return str.split('').reverse().join('');
}

// #2 Solution
export const reverse = (str: string): string => {
  const strArray = str.split('');

  return strArray.reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

// #3 Solution
export const reverse = (str: string): string => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}