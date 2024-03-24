const data = require("./data.json");

//https://adventofcode.com/2023/day/1 - PART 1

let sum = 0;
data.forEach((item) => {
  let arr = item.match(/[0-9]/gm);
  sum += parseInt("" + arr[0] + arr[arr.length - 1 >= 0 ? arr.length - 1 : 0]);
});
console.log(sum);
