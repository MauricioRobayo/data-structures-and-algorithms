function reverseArray(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
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

console.log(reverseWords(array));
