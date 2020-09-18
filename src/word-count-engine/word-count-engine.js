function wordCountEngine(document) {
  // Build array of normalized words
  const normalizedWords = [];
  document.split(' ').forEach((word) => {
    if (word !== '') {
      normalizedWords.push(word.toLowerCase().replace(/[^a-z]/g, ''));
    }
  });

  // build a map of the frequencies O(n)
  const wordFrequencies = new Map();
  normalizedWords.forEach((word) => {
    if (wordFrequencies.has(word)) {
      wordFrequencies.set(word, wordFrequencies.get(word) + 1);
    } else {
      wordFrequencies.set(word, 1);
    }
  });

  // build and array with frequencies as indexes and words as an array
  const sortedFrequencies = [];
  wordFrequencies.forEach((frequency, word) => {
    if (sortedFrequencies[frequency] === undefined) {
      sortedFrequencies[frequency] = [word];
    } else {
      sortedFrequencies[frequency].push(word);
    }
  });

  // unwind frequencies array
  const result = [];
  for (let i = sortedFrequencies.length - 1; i >= 0; i--) {
    if (Array.isArray(sortedFrequencies[i])) {
      sortedFrequencies[i].forEach((word) => {
        result.push([word, String(i)]);
      });
    }
  }

  return result;
}

const doc =
  'Every book is a quotation; and every house is a        quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ';
const wordCount = wordCountEngine(doc);

console.log(wordCount);
