const solution = (input) => {
  const ns = input;
  const nlen = ns.length;
  const n = +input;
  let cutlen = 0;

  let m = "";
  for (let i = 1; i <= n; i++) {
    m += i.toString();
    const iOf = m.indexOf(ns);
    if (iOf !== -1) {
      return cutlen + iOf + 1;
    } else {
      const cut = m.length > nlen ? m.length - nlen : 0;
      m = m.slice(cut);
      cutlen += cut;
    }
  }
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
