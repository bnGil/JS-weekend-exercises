const binaryToDecimal = (binarArr) => {
  let decimal = 0;
  let pow = binarArr.length - 1;
  for (let i = 0; i < binarArr.length; i++) {
    decimal += binarArr[i] * 2 ** pow;
    pow--;
  }
  return decimal;
};

console.log("expected: 1,", "real:" + binaryToDecimal([0, 0, 0, 1]));
console.log("expected: 2,", "real:" + binaryToDecimal([0, 0, 1, 0]));
console.log("expected: 5,", "real:" + binaryToDecimal([0, 1, 0, 1]));
console.log("expected: 9,", "real:" + binaryToDecimal([1, 0, 0, 1]));
console.log("expected: 2,", "real:" + binaryToDecimal([0, 0, 1, 0]));
console.log("expected: 6,", "real:" + binaryToDecimal([0, 1, 1, 0]));
console.log("expected: 15,", "real:" + binaryToDecimal([1, 1, 1, 1]));
console.log("expected: 11,", "real:" + binaryToDecimal([1, 0, 1, 1]));
console.log("expected: 57,", "real:" + binaryToDecimal([1, 1, 1, 0, 0, 1]));
