function findGrantsCap(grantsArray, newBudget) {
  let i = 0;
  let cap = newBudget / grantsArray.length;
  let runningBudget = newBudget;

  grantsArray.sort((a, b) => a - b);

  while (grantsArray[i] < cap) {
    runningBudget -= grantsArray[i];
    cap = runningBudget / (grantsArray.length - i - 1);
    i += 1;
  }

  return cap;
}

console.log(findGrantsCap([2, 100, 50, 120, 1000], 190));
