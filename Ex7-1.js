function filter(arr, callback) {
  if (Array.isArray(arr)) {
    const res = [];
    for (let item of arr) {
      if (callback(item)) {
        res.push(item);
      }
    }
    return res;
  } else {
    console.log("filter function is for array only");
  }
}

function isGreaterThan5(num) {
  return num > 5 ? true : false;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = filter(array, isGreaterThan5);
console.log(array2);
