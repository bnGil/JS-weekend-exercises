function nb_year(p0, percent, aug, p) {
  let population = 0;
  let n = 0;
  while (population <= p) {
    population = p0 + (p0 * percent) / 100 + aug;
    n++;
    p0 = population;
  }
  return n;
}

console.log("expected: 3,", "real:" + nb_year(1000, 2, 50, 1200));
console.log("expected: 15,", "real:" + nb_year(1500, 5, 100, 5000));
console.log("expected: 10,", "real:" + nb_year(1500000, 2.5, 10000, 2000000));
