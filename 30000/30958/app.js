const solution = (input) => {
  const logoSong = input.split("\n")[1];
  const alphabetCount = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < logoSong.length; i++) {
    const char = logoSong[i];
    const index = char.charCodeAt() - 97;
    alphabetCount[index]++;
  }

  return Math.max(...alphabetCount);
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
