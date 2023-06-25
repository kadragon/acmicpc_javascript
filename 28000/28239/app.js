const solution = (input) => {
  const menus = input.split("\n").slice(1).map(BigInt);
  const result = [];

  for (let menu of menus) {
    let ans = [];
    let i = 0;

    while (menu) {
      if (menu % 2n) ans.push(i);
      menu = menu / 2n;
      i++;
    }

    if (ans.length == 1) {
      const tmp = ans[0];
      ans = [tmp - 1, tmp - 1];
    }

    result.push(ans.join(" "));
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
