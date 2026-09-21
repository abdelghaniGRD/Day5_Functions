function square(n) {
  return n * n;
}

function sumOfSquares(a, b) {
  let r1 = square(a);
  let r2 = square(b);

  return r1 + r2;
}

console.log(sumOfSquares(2, 3));
