function findGrantsCap(grantsArray, newBudget) {
  let i = 0;
  let cap = newBudget / grantsArray.length;
  let runningBudget = newBudget;

  const sortedGrantsArray = grantsArray.sort((a, b) => a - b);

  while (sortedGrantsArray[i] < cap) {
    runningBudget -= sortedGrantsArray[i];
    cap = runningBudget / (grantsArray.length - i - 1);
    i += 1;
  }

  return cap;
}

console.log(findGrantsCap([2, 47, 47, 47, 47], 190));
