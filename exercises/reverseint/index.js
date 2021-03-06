// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return reverseIntProvidedSolution(n);
}

function reverseIntMySolution(n) {
  let reversed = 0;
  const sign = n < 0 ? -1 : 1;
  n *= sign;

  while (n !== 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return sign * reversed;
}

function reverseIntProvidedSolution(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
