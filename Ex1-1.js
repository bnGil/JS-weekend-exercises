function isTrueOrFalse(boolean) {
  if (boolean === true) {
    return "Yes";
  } else if (boolean === false) {
    return "No";
  }
}

console.log(isTrueOrFalse(true)); // Yes
console.log(isTrueOrFalse(false)); // No
console.log(isTrueOrFalse(1)); // undefined
console.log(isTrueOrFalse(0)); // undefined
