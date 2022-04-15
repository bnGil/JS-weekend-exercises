const toWeirdCase = (str) => {
  const lowerCasedWords = str.toLowerCase().split(" ");
  const weirdCasedWords = lowerCasedWords.map((word) => {
    let weirdWord = word.split("");
    for (let i = 0; i < word.length; i += 2) {
      weirdWord[i] = weirdWord[i].toUpperCase();
    }
    return weirdWord.join("");
  });
  return weirdCasedWords.join(" ");
};

console.log(
  "expected: WeIrD StRiNg CaSe,",
  "real:" + toWeirdCase("Weird string case")
);
