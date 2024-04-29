const data = require("./data.json");
const test = require("./test.json");
let DATA = data;

//https://adventofcode.com/2023/day/5 - PART 1

let { seeds, categories } = parseData();
let result = findLocations(seeds, categories);
console.log("result: ", result);

function findLocations(seeds, categories) {
  for (let i = 0; i < seeds.length; i++) {
    for (const category_name in categories) {
      for (let j = 0; j < categories[category_name].length; j++) {
        const converter = categories[category_name][j];
        if (seeds[i] >= converter[1] && seeds[i] <= converter[1] + converter[2]) {
          seeds[i] = converter[0] + seeds[i] - converter[1];
          break;
        }
      }
    }
  }
  return Math.min(...seeds);
}

function parseData() {
  let seeds = [...DATA[0].matchAll(/\d+/gm)].map((match) => Number(match[0]));
  let categories = {
    seed_to_soil: [],
    soil_to_fertilizer: [],
    fertilizer_to_water: [],
    water_to_light: [],
    light_to_temperature: [],
    temperature_to_humidity: [],
    humidity_to_location: [],
  };
  let category = "";
  DATA.splice(2).forEach((row) => {
    if (row === "") return;
    if (row.includes("map")) {
      category = row.split(" ")[0].replaceAll("-", "_");
      return;
    }
    categories[category].push([...row.matchAll(/\d+/gm)].map((match) => Number(match[0])));
  });
  return { seeds, categories };
}
