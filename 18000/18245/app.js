const solution = (input) => {
  const lines = input.split("\n");

  const decode = (str, k) =>
    str
      .split("")
      .filter((_, i) => i % k === 0)
      .join("");

  const result = lines.slice(0, -1).map((line, i) => decode(line, i + 2));

  return result.join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
