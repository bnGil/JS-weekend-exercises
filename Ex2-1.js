const sumOfLowestNums = (arrayOfNums) => {
  arrayOfNums.sort((a, b) => a - b);
  return arrayOfNums[0] + arrayOfNums[1];
};

console.log("expected: 7,", "real:" + sumOfLowestNums([19, 5, 42, 2, 77]));
console.log(
  "expected: 3453455,",
  "real:" + sumOfLowestNums([10, 343445353, 3453445, 3453545353453])
);
