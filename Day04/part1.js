const data = require("./data.json");
const test = require("./test.json");
let DATA = data;

//https://adventofcode.com/2023/day/4 - PART 1
let count = 0;
for (let i = 0; i < DATA.length; i++) {
  let item = DATA[i];
  let row = item.split(/\s+/).slice(2);
  let found = false;
  let winningNumbers = [];
  let myNumbers = [];
  row.forEach((el) => {
    if (el === "|") {
      found = true;
      return;
    }
    if (!found) winningNumbers.push(el);
    else myNumbers.push(el);
  });
  let won = myNumbers.filter((num) => {
    return winningNumbers.includes(num);
  }).length;
  if (won <= 0) continue;
  count += Math.pow(2, won - 1);
}
console.log("count: ", count);
