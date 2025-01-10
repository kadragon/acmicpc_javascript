const solution = (input) => {
  const ingredients = input.split("\n")[1].split(" ");

  const cheeseList = new Set(ingredients.filter((ingredient) => ingredient.endsWith("Cheese")));
  
  return cheeseList.size >= 4 ? "yummy" : "sad";
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;