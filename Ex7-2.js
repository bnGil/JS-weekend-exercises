const forEach = (arr, callback) => {
  if (Array.isArray(arr)) {
    for (let item of arr) {
      callback(item);
    }
  } else {
    console.log("forEach function is for array only");
  }
};
