function sumUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

let total = sumUpTo(5);

console.log(total);
