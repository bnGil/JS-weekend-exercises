const findUnique = (numbers) => {
  numbers.sort((a, b) => a - b);
  if (numbers[0] === numbers[1]) {
    return numbers[numbers.length - 1];
  } else {
    return numbers[0];
  }
};

console.log("expected: 2,", "real:" + findUnique([1, 1, 1, 2, 1, 1]));
console.log("expected: 0.55,", "real:" + findUnique([0, 0, 0.55, 0, 0]));
console.log("expected: 1,", "real:" + findUnique([2, 2, 1, 2, 2, 2]));
