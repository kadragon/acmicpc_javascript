const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const [n, orignal, target] = input.split("\n");
const vowels = "aeiou".split("");

function checkStartAndEnd(o, t) {
  return o.charAt(0) === t.charAt(0) && o.charAt(n - 1) === t.charAt(n - 1);
}

function checkWithoutVowels(o, t) {
  const oWithoutVowels = o
    .split("")
    .filter((v) => !vowels.includes(v))
    .join("");
  const tWithoutVowels = t
    .split("")
    .filter((v) => !vowels.includes(v))
    .join("");

  return oWithoutVowels === tWithoutVowels;
}

function checkVowels(o, t) {
  const oVowels = o
    .split("")
    .filter((v) => vowels.includes(v))
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  const tVowels = t
    .split("")
    .filter((v) => vowels.includes(v))
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  for (const vowel of vowels) {
    if (oVowels[vowel] !== tVowels[vowel]) {
      return false;
    }
  }

  return true;
}

console.log(
  checkStartAndEnd(orignal, target) &&
    checkWithoutVowels(orignal, target) &&
    checkVowels(orignal, target)
    ? "YES"
    : "NO"
);
