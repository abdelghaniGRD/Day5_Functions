function safeDivide(a, b) {
  if (b === 0) return "Cannot devide by zero";

  return a / b;
}

console.log(safeDivide(10, 0));
