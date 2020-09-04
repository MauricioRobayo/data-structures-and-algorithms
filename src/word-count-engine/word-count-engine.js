function wordCountEngine(document) {
  const wordFrequency = new Map();
  const order = [];
  const result = [];

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

  wordFrequency.forEach((val, key) => {
    if (order[val] === undefined) {
      order[val] = [key];
    } else {
      order[val].push(key);
    }
  });

  for (let i = order.length - 1; i >= 0; i -= 1) {
    const words = order[i];
    if (order[i] === undefined) {
      continue; // eslint-disable-line no-continue
    }
    words.forEach((word) => {
      result.push([word, String(i)]);
    });
  }

  return result;
}

const document =
  'Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ';
const wordCount = wordCountEngine(document);

console.log(wordCount);
