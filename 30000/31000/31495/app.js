const solution = (input) => {
  if (input.length > 2 && input[0] === '"' && input[input.length - 1] === '"') {
    return input.replaceAll('"', "");
  }

  return "CE";
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
