let calls = 0;
// function diceRoll(numberOfDices, combination = [], result = []) {
//   if (numberOfDices === 0) {
//     result.push([...combination])
//     return result
//   }
//   for (let side = 1; side <= 6; side += 1) {
//     combination.push(side)
//     diceRoll(numberOfDices - 1, combination, result)
//     combination.pop(side)
//   }
//   return result
// }

function diceSum(
  numberOfDices,
  targetValue,
  accSum = 0,
  combination = [],
  result = []
) {
  calls += 1;
  if (numberOfDices === 0) {
    result.push([...combination]);
    return result;
  }
  for (let side = 1; side <= 6; side += 1) {
    const remainingDice = numberOfDices - 1;
    if (
      accSum + side + 1 * remainingDice <= targetValue &&
      accSum + side + 6 * remainingDice >= targetValue
    ) {
      combination.push(side);
      diceSum(
        numberOfDices - 1,
        targetValue,
        accSum + side,
        combination,
        result
      );
      combination.pop();
    }
  }
  return result;
}

console.log(diceSum(3, 8), calls);
