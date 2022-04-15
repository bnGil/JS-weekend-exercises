const shortestWord = (str) => {
  words = str.split(" ");
  let idxOfShortest = 0;
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].length < words[i + 1].length) {
      idxOfShortest = i;
    } else {
      idxOfShortest = i + 1;
    }
  }
  return words[idxOfShortest].length;
};

console.log(
  "expected: 3,",
  "real:" + shortestWord("aaaaaaa bbbbbb ccccc dddd eee")
);
