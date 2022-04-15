function map(arr, callback) {
  if (Array.isArray(arr)) {
    const res = [];
    for (let item of arr) {
      res.push(callback(item));
    }
    return res;
  } else {
    console.log("map function is for array only");
  }
}

let str = "hello";
map(str, console.log);
