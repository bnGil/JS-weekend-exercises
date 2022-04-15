const countDuplicates = (str) => {
  const chars = {};
  for (let char of str.toLowerCase()) {
    chars[char] = (chars[char] || 0) + 1;
  }
  const duplicates = {};
  for (let char of Object.keys(chars)) {
    if (chars[char] > 1) {
      duplicates[char] = chars[char];
    }
  }
  //   return duplicates || 0;
  console.log(duplicates);
};

// console.log("expected: 0,", "real:" + countDuplicates("abcde"));
// console.log("expected: ,", "real:" + countDuplicates("aabbcde"));
countDuplicates("aabbcde");
countDuplicates("aaaabbcde");
countDuplicates("indivisibility");
// If instead of calling the function and console.log the object inside the function, i console.log the function call it logs [object Object]
