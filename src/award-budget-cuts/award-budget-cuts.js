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

/*

N grants

newBudget

impact as few N grants by applying a maximum cap on all grants

cap: any grant higher than grant will exactly cap

if originalGrant < cap
  originalGrant
else
  cap

grantsArray = [grant1, grant2, grant3]
newBudget = x

newGrantsArray = [grant1, grant2, cap, cap, grant5] = Sum(newGrantsArray) = newBudget
                                    ^  ^

input:  grantsArray = [2, 100, 5, 120, 1000]
                      
                      [2, 47, 47, 47, 47] = 190

                      [g1, g2, g3, g4, g5]

                      newBudget / grantsArray.length

                      [2, 47, 5, 47, 47]
                       ^      ^

                      [2, 5, 47, 47, 47]
                      
                      [38, 38, 38, 38, 38]

                      [2, 38, 38, 38, 38] newBudget - grantsArray[i] / grantsArray.length

                      (190 - 2) / 4 = 47



                      [2, 5, 100, 120, 1000]
                             ^    

                      i = 0
                      cap = newBudget / grantsArray.length // 38

                      while (sortedGrantsArray[i] < cap) // 5 < 47
                        newBudget -= sortedGrantsArray[i] // 183
                        cap = newBudget / (grantsArray.length - i - 1) // 63
                        i++

                      return cap




output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190


*/
