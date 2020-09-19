function reverseArray(arr, start, end) {
  const middle = (end + start) / 2;
  for (let i = start; i <= middle; i++) {
    const tail = end - (i - start);
    [arr[i], arr[tail]] = [arr[tail], arr[i]];
  }
}

function reverseWords(arr) {
  reverseArray(arr, 0, arr.length - 1);

  let wordStart = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      reverseArray(arr, wordStart, i);
      wordStart = i + 1;
    }

    if (arr[i].trim() === '') {
      reverseArray(arr, wordStart, i - 1);
      wordStart = i + 1;
    }
  }
  return arr;
}

// function reverseWords(arr) {
//   return [...arr
//     .join('')
//     .split(' ')
//     .filter((el) => el !== '')
//     .reverse()
//     .join(' ')]
// }

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

console.log(reverseWords(array));
