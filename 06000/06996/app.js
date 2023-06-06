const solution = (input) => {
  const questions = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(" "));

  const charSort = (str) => {
    return str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  };

  const isAnagrams = (a, b) => {
    return charSort(a) === charSort(b);
  };

  const result = [];

  for (const question of questions) {
    const [a, b] = question;
    const isAnagram = isAnagrams(a, b);
    const resultStr = `${a} & ${b} are ${isAnagram ? "" : "NOT "}anagrams.`;
    result.push(resultStr);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
