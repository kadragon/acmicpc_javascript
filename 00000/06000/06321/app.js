const solution = (input) => {
  const [, ...strings] = input.split("\n");

  const result = strings.map((string, i) => {
    const sub_result = [...string].map((char) => {
      let nextChar = char.charCodeAt(0) + 1;
      if (nextChar > 90) {
        nextChar -= 26;
      }

      return String.fromCharCode(nextChar);
    });

    return `String #${i + 1}\n${sub_result.join("")}`;
  });

  return result.join("\n\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
