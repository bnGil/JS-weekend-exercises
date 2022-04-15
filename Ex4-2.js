function tribonacci(startArr, n) {
  if (n === 0) {
    return [];
  }
  let [n1, n2, n3] = startArr;
  if (n === 1) {
    return n1;
  }
  if (n === 2) {
    return [n1, n2];
  }
  if (n === 3) {
    return startArr;
  }
  const res = [...startArr];
  let current;
  for (let i = 3; i < n; i++) {
    current = n1 + n2 + n3;
    n1 = n2;
    n2 = n3;
    n3 = current;
    res.push(current);
  }
  return res;
}

console.log(tribonacci([0, 0, 1], 0));
console.log(tribonacci([0, 0, 1], 1));
console.log(tribonacci([0, 0, 1], 2));
console.log(tribonacci([0, 0, 1], 3));
console.log(tribonacci([0, 0, 1], 4));
console.log(tribonacci([0, 0, 1], 9));
console.log(tribonacci([1, 1, 1], 8));
