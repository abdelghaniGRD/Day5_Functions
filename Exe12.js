function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

function describeParity(n) {
  if (isOdd(n)) return "odd";
  else if (isEven(n)) return "even";
}

console.log(describeParity(7));
