const isisogram = (str) => {
  const uniqueChars = {};
  for (let char of str.toLowerCase()) {
    if (!uniqueChars[char]) {
      uniqueChars[char] = 1;
    }
  }
  return Object.keys(uniqueChars).length === str.length ? true : false;
};

console.log("expected: true,", "real:" + isisogram("Dermatoglyphics"));
console.log("expected: false,", "real:" + isisogram("aba"));
console.log("expected: false,", "real:" + isisogram("moOse"));
