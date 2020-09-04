function wordCountEngine(document) {
  const wordFrequency = new Map();

  document
    .trim()
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .split(' ')
    .forEach((word) => {
      if (wordFrequency.has(word)) {
        wordFrequency.set(word, wordFrequency.get(word) + 1);
      } else {
        wordFrequency.set(word, 1);
      }
    });

  // console.log(wordFrequency)

  return [...wordFrequency.entries()]
    .map(([key, val]) => [key, String(val)])
    .sort(([k1, v1], [k2, v2]) => v2 - v1); // eslint-disable-line no-unused-vars
}

const document =
  'Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ';
const wordCount = wordCountEngine(document);

console.log({ wordCount });
