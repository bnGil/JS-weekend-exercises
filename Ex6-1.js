const accum = (str) => {
  arrOfUppCaseChars = str.toUpperCase().split("");
  let res = arrOfUppCaseChars.map((letter, idx) => {
    let arrOfChar = [letter];
    for (let i = 1; i <= idx; i++) {
      arrOfChar.push(letter.toLowerCase());
    }
    return arrOfChar.join("");
  });
  return res.join("-");
};

console.log("expected: A-Bb-Ccc-Dddd,", "real:" + accum("abcd"));
console.log(
  "expected: R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy,",
  "real:" + accum("RqaEzty")
);
console.log("expected: C-Ww-Aaa-Tttt,", "real:" + accum("cwAt"));
