function toCamelCase(str) {
  const wordsArr = str.split(/[-_]+/);
  let splittedWord;
  if (wordsArr[0][0] === wordsArr[0][0].toUpperCase()) {
    const pascal = wordsArr.map((word) => {
      splittedWord = word.split("");
      splittedWord[0] = splittedWord[0].toUpperCase();
      return splittedWord.join("");
    });
    return pascal.join("");
  } else {
    let camelCase = [wordsArr[0]];
    for (let i = 1; i < wordsArr.length; i++) {
      splittedWord = wordsArr[i].split("");
      splittedWord[0] = splittedWord[0].toUpperCase();
      camelCase.push(splittedWord.join(""));
    }
    return camelCase.join("");
  }
}
console.log(
  "expected: TheStealthWarrior,",
  "real:" + toCamelCase("The-Stealth-Warrior")
);
console.log(
  "expected: theStealthWarrior,",
  "real:" + toCamelCase("the_stealth_warrior")
);
console.log(
  "expected: theStealthWarrior,",
  "real:" + toCamelCase("the-stealth_warrior")
);
