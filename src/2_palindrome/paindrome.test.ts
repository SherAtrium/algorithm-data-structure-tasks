import { palindrome } from '.';

test('palindrome function is defined', () => {
  expect(palindrome).toBeDefined();
});

test('"appa" is a palindrome', () => {
  expect(palindrome('appa')).toBeTruthy();
});

test('" appa" is not a palindrome', () => {
  expect(palindrome(' appa')).toBeFalsy();
});

test('"appa " is not a palindrome', () => {
  expect(palindrome('appa ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
