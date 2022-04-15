const centuryFromYear = (year) => {
  return Math.floor((year + 99) / 100);
};

console.log("expected: 1,", "real:" + centuryFromYear(70));
console.log("expected: 1,", "real:" + centuryFromYear(1));
console.log("expected: 1,", "real:" + centuryFromYear(100));
console.log("expected: 18,", "real:" + centuryFromYear(1705));
console.log("expected: 19,", "real:" + centuryFromYear(1900));
console.log("expected: 17,", "real:" + centuryFromYear(1601));
console.log("expected: 20,", "real:" + centuryFromYear(2000));
