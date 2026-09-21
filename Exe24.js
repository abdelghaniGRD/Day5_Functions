function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
