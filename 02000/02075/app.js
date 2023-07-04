const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = undefined;
let save = undefined;
let cnt = 0;

rl.on("line", (line) => {
  if (n === undefined) {
    n = +line;
  } else if (save === undefined) {
    save = line.split(" ").map((v) => +v);
    save.sort((a, b) => b - a);
  } else {
    line.split(" ").forEach((v) => {
      v = +v;
      if (save[n - 1] < v) save[n - 1] = v;
      for (let j = n - 1; j > 0; j--) {
        if (save[j] > save[j - 1]) {
          [save[j], save[j - 1]] = [save[j - 1], save[j]];
        } else break;
      }
    });
  }

  if (cnt++ === n) rl.close();
});

rl.on("close", () => {
  console.log(save[n - 1]);
  process.exit();
});
