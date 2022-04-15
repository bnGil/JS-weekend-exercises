const maskify = (str) => {
  let arrOfLetters = str.split("");
  for (let i = 0; i < arrOfLetters.length - 4; i++) {
    arrOfLetters[i] = "#";
  }
  return arrOfLetters.join("");
};

console.log(
  "expected: ############5616,",
  "real:" + maskify("4556364607935616")
);
console.log("expected: #######5616,", "real:" + maskify("64607935616"));
console.log("expected: 1,", "real:" + maskify("1"));
console.log("expected: ,", "real:" + maskify(""));
console.log("expected: ##ippy,", "real:" + maskify("Skippy"));
console.log(
  "expected: ####################################man!,",
  "real:" + maskify("Nananananananananananananananana Batman!")
);
