const data = require("./data.json");
const test = require("./test.json");
let DATA = data;

//https://adventofcode.com/2023/day/3 - PART 2
let count = 0;
let numbers = [];
let gears = [];
for (let i = 0; i < DATA.length; i++) {
  let item = DATA[i];

  numbers.push(
    ...Array.from(item.matchAll(/\d+/gm), (match) => {
      return { number: Number(match[0]), row: i, col: match.index, len: match[0].length };
    })
  );
  gears.push(
    ...Array.from(item.matchAll(/\*/gm), (match) => {
      return { row: i, col: match.index };
    })
  );
}
gears.forEach((gear) => {
  let filtered = numbers.filter((num) => {
    return num.row >= gear.row - 1 && num.row <= gear.row + 1 && num.col >= gear.col - num.len && num.col <= gear.col + 1;
  });
  if (filtered.length >= 2) {
    let prod = 1;
    filtered.forEach((num) => {
      prod *= num.number;
    });
    count += prod;
  }
});

console.log("count: ", count);
