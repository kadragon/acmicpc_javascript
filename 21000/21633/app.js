const solution = (input) => {
  const amount = parseFloat(input);
  const fee = (amount * 0.01 + 25).toFixed(2);

  if (fee > 2000) {
    return "2000.00";
  } else if (fee < 100) {
    return "100.00";
  } else {
    return fee.toString();
  }
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
