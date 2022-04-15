const repeat_str = (n, str) => {
  let repeated = [];
  for (let i = 0; i < n; i++) {
    repeated += str;
  }
  return repeated;
};

console.log("expected: IIIIII,", "real:" + repeat_str(6, "I"));
console.log(
  "expected: HelloHelloHelloHelloHello,",
  "real:" + repeat_str(5, "Hello")
);
