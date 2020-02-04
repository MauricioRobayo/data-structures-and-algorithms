function binToDec(dec) {
  if (dec < 2) {
    return String(dec)
  }
  let result = binToDec(Math.floor(dec / 2))
  result += binToDec(dec % 2)
  return result
}

console.log(binToDec(43))
console.log(binToDec(789))
console.log(binToDec(22))
