const data = require("./data.json");

//https://adventofcode.com/2023/day/1 - PART 2

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const revNumbers = ["zero", "eno", "owt", "eerht", "ruof", "evif", "xis", "neves", "thgie", "enin"];
const regex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/gm;
const revRegex = /[0-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/gm;

let sum = 0;
data.forEach((item) => {
  let arr1 = item.match(regex);
  let firstNumber = isNaN(arr1[0]) ? numbers.indexOf(arr1[0]) : arr1[0];

  item = item.split("").reverse().join("");

  arr2 = item.match(revRegex);
  let lastNumber = isNaN(arr2[0]) ? revNumbers.indexOf(arr2[0]) : arr2[0];

  sum += parseInt("" + firstNumber + "" + lastNumber);
});
console.log(sum);
