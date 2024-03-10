const solution = (input) => {
  const [nm, ...lines] = input.split("\n");
  const [, m] = nm.split(" ").map(Number);

  return lines
    .map((line) => {
      let chars = line.split("");
      for (let i = 0, j = m - 1; i < j; i++, j--) {
        if (chars[i] !== ".") chars[j] = chars[i];
        else if (chars[j] !== ".") chars[i] = chars[j];
      }
      return chars.join("");
    })
    .join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
