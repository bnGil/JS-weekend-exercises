function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

console.log("expected: 11,", "real:" + basicOp("+", 4, 7));
console.log("expected: -3,", "real:" + basicOp("-", 15, 18));
console.log("expected: 25,", "real:" + basicOp("*", 5, 5));
console.log("expected: 7,", "real:" + basicOp("/", 49, 7));
