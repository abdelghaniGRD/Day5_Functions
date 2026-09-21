function isInRange(n) {
  for (let i = 1; i <= 100; i++) {
    if (i === n) return true;
  }
  return false;
}

console.log(isInRange(75));
console.log(isInRange(120));
