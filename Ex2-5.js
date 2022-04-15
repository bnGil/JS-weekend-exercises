function summation(num) {
  return ((1 + num) * num) / 2;
}

console.log("expected: 3,", "real:" + summation(2));
console.log("expected: 36,", "real:" + summation(8));
