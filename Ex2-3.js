function findNextSquare(perfectSquare) {
  if (Math.sqrt(perfectSquare) % 1 === 0) {
    return (Math.sqrt(perfectSquare) + 1) ** 2;
  } else {
    return -1;
  }
}

console.log("expected: 144,", "real:" + findNextSquare(121));
console.log("expected: 676,", "real:" + findNextSquare(625));
console.log("expected: -1,", "real:" + findNextSquare(114));
