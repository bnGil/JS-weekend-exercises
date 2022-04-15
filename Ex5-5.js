function abbreviate(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

console.log("expected: S.H,", "real:" + abbreviate("Sam Harris"));
console.log("expected: P.F,", "real:" + abbreviate("Patrick Feeney"));
