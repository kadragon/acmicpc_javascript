const solution = (input) => {
  const lines = input.split("\n");
  const ingredients = lines[1].split(" ");
  const usedIngredients = lines[2].split(" ");

  const usedSet = new Set(usedIngredients);

  for (const ingredient of ingredients) {
    if (!usedSet.has(ingredient)) {
      return ingredient;
    }
  }
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;