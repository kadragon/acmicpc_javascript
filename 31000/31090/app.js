const solution = (input) => {
  const years = input.split("\n").slice(1).map(Number);

  const results = years.map((year) => {
    return (year + 1) % (year % 100) === 0 ? "Good" : "Bye";
  });

  return results.join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
