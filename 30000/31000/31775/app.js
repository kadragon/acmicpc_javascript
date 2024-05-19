const solution = (input) => {
  const lines = input.split("\n");
  const charPresence = Array(26).fill(false);

  lines.forEach((line) => {
    const charIndex = line.charCodeAt(0) - 97;
    charPresence[charIndex] = true;
  });

  const requiredChars = "lkp";
  const allCharsPresent = requiredChars
    .split("")
    .every((char) => charPresence[char.charCodeAt(0) - 97]);

  return allCharsPresent ? "GLOBAL" : "PONIX";
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
