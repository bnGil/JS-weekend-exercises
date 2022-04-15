const peopleOnTheBus = (stations) => {
  let sumOfGetInto = 0;
  let sumOfGetOff = 0;
  for (let station of stations) {
    sumOfGetInto += station[0];
    sumOfGetOff += station[1];
  }
  let peopleAtTheEnd = sumOfGetInto - sumOfGetOff;
  return peopleAtTheEnd;
};

console.log(
  "expected: 3,",
  "real:" +
    peopleOnTheBus([
      [1, 0],
      [1, 0],
      [1, 0],
    ])
);
console.log(
  "expected: 7,",
  "real:" +
    peopleOnTheBus([
      [2, 0],
      [2, 0],
      [2, 0],
      [1, 0],
    ])
);
