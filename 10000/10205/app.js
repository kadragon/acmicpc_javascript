const solution = (input) => {
  let result = "";

  const [n, ...quests] = input.split("\n");

  for (let i = 1; i <= n; i++) {
    let hp = +quests.shift();
    const quest = quests.shift();

    for (const q of quest) {
      hp--;
      if (q === "c") hp += 2;
    }

    result += `Data Set ${i}:\n${hp}\n\n`;
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
