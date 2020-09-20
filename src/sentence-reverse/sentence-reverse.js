function reverseArray(arr, start = 0, end = arr.length - 1) {
  const middle = (start + end) / 2;

  for (let i = start; i < middle; i++) {
    const endOffset = end - (i - start);

    [arr[i], arr[endOffset]] = [arr[endOffset], arr[i]];
  }
}

function reverseWords(arr) {
  reverseArray(arr);

  let wordStart = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() === '' || i === arr.length - 1) {
      const wordEnd = i === arr.length - 1 ? i : i - 1;

      reverseArray(arr, wordStart, wordEnd);
      wordStart = i + 1;
    }
  }

  return arr;
}

const array = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];

/*
1. reverse the array
olleh dlrow

2. reverse each word in the reversed array
hello  world
*/

console.log(reverseWords(array));
