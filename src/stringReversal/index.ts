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
  const strArray = str.split(''); // ['a', 'p', 'p', 'l', 'e'];

  return strArray.reduce((reversed, character) => {
    // a + '' = 'a';
    // p + 'a' = 'pa';
    // p + 'pa' = 'ppa';
    // l + 'ppa' = 'lppa';
    // e + 'lppa' = 'elppa';
    return character + reversed;
  }, '');
}

// #3 Solution
export const reverse = (str: string): string => {
  let reversed = '';

  for (let character of str) { // apple -> a, p, p, l, e
    reversed = character + reversed;
  }

  return reversed;
}