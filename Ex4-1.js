function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  if (n === 1) {
    return n1;
  }
  if (n === 2) {
    return n2;
  }
  let current;
  for (let i = 2; i < n; i++) {
    current = n1 + n2;
    n1 = n2;
    n2 = current;
  }
  return current;
}

console.log(fibonacci(8));
