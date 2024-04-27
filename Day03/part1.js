const data = require("./data.json");
const test = require("./test.json");
let DATA = data;

//https://adventofcode.com/2023/day/3 - PART 1
const specialChars = /\*|\&|\@|\/|\+|\#|\$|\%|\=|\-/gm;
let count = 0;
let numbers = [];
for (let i = 0; i < DATA.length; i++) {
  let item = DATA[i];

  numbers.push(
    ...Array.from(item.matchAll(/\d+/gm), (match) => {
      return { number: Number(match[0]), row: i, col: match.index, len: match[0].length };
    })
  );
}
numbers.forEach((el) => {
  const num = el.number,
    row = el.row,
    col = el.col,
    len = el.len;
  let topString = DATA[row - 1]?.slice(Math.max(col - 1, 0), col + len + 1) || "";
  let bottomString = DATA[row + 1]?.slice(Math.max(col - 1, 0), col + len + 1) || "";
  let leftChar = DATA[row][col - 1] || "";
  let rightChar = DATA[row][col + len] || "";
  if (topString?.match(specialChars) || bottomString?.match(specialChars) || leftChar?.match(specialChars) || rightChar?.match(specialChars)) {
    count += num;
  }
});
console.log("count: ", count);
