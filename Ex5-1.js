const trimmingStr = (str) => {
  const arr = str.split("");
  arr.pop();
  arr.shift();
  return arr.join("");
};

console.log("expected: irs,", "real:" + trimmingStr("first"));
console.log("expected: bsolutel,", "real:" + trimmingStr("absolutely"));
