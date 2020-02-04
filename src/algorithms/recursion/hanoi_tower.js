function hanoiSteps(discs, from = 1, to = 3, empty = 2) {
  if (discs === 1) {
    console.log(`${from}->${to}`)
  } else {
    hanoiSteps(discs - 1, from, empty, to)
    console.log(`${from}->${to}`)
    hanoiSteps(discs - 1, empty, to, from)
  }
}

hanoiSteps(1)
hanoiSteps(3)
