const data = require("./data.json");
const test = require("./test.json");
let DATA = data;

//https://adventofcode.com/2023/day/4 - PART 2
let cards = new Array(DATA.length).fill(1);
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
  for (let j = 1; j <= won; j++) {
    cards[i + j] += cards[i];
  }
}
console.log(
  "count: ",
  cards.reduce((acc, val) => acc + val, 0)
);
