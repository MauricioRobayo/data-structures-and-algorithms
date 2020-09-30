function shortestWordEditPath(source, target, words) {
  const wordsGraph = buildWordsGraph([source, ...words]);
  console.log(wordsGraph);
  const distance = findShortestDistance(source, target, wordsGraph);
  return distance;
}

function findShortestDistance(source, target, graph) {
  const queue = [[source, 0]];
  const visited = new Set();

  while (queue.length) {
    const [currentNode, distance] = queue.shift();
    console.log({ currentNode, distance });
    if (currentNode === target) {
      return distance;
    }
    const adjacentNodes = graph.get(currentNode);
    console.log({ adjacentNodes });
    adjacentNodes.forEach((adjacentNode) => {
      if (!visited.has(adjacentNode)) {
        queue.push([adjacentNode, distance + 1]);
        visited.add(currentNode);
      }
    });
  }

  return -1;
}

function buildWordsGraph(words) {
  const wordsGraph = new Map();
  const wordSet = new Set(words);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (const word of words) {
    wordsGraph.set(word, []);
    for (const letter of alphabet) {
      for (let i = 0; i < word.length; i++) {
        const currentWord = word.split('');
        currentWord[i] = letter;
        const newWord = currentWord.join('');
        if (wordSet.has(newWord) && word !== newWord) {
          wordsGraph.get(word).push(newWord);
        }
      }
    }
  }
  console.log({ wordsGraph });
  return wordsGraph;
}

const source = 'bit';
const target = 'dog';

const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];

console.log(shortestWordEditPath(source, target, words));
