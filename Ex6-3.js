function longest(str1, str2) {
  const concatedStr = str1 + str2;
  const uniqueChars = {};
  for (let char of concatedStr) {
    if (!uniqueChars[char]) {
      uniqueChars[char] = 1;
    }
  }
  return Object.keys(uniqueChars).sort().join("");
}

console.log(
  "expected: abcdefklmopqwxy,",
  "real:" + longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")
);
console.log(
  "expected: abcdefghijklmnopqrstuvwxyz,",
  "real:" + longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
