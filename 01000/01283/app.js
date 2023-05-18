const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const commands = input.split("\n").slice(1);
const used = Array(26).fill(false);

const answer = (command, t, k) => {
  let ans = "";
  const cmd = command.split(" ");
  for (let i = 0; i < cmd.length; i++) {
    if (t != i) {
      ans += cmd[i] + " ";
    } else {
      for (let j = 0; j < cmd[i].length; j++) {
        if (k != j) {
          ans += cmd[i][j];
        } else {
          ans += "[" + cmd[i][j] + "]";
        }
      }
      ans += " ";
    }
  }
  console.log(ans.trim());
};

// console.log(commands[0].split(" ")[0]);

for (const command of commands) {
  let getAnswer = false;
  const cmd = command.split(" ");

  for (let i = 0; i < cmd.length; i++) {
    let check = cmd[i].charCodeAt(0);
    if (check > 96) {
      check -= 32;
    }

    if (!used[check - 65]) {
      used[check - 65] = true;
      answer(command, i, 0);
      getAnswer = true;
      break;
    }
  }

  for (let i = 0; i < cmd.length && !getAnswer; i++) {
    for (let j = 0; j < cmd[i].length; j++) {
      let check = cmd[i][j].charCodeAt(0);
      if (check > 96) {
        check -= 32;
      }

      if (!used[check - 65]) {
        used[check - 65] = true;
        answer(command, i, j);
        getAnswer = true;

        break;
      }
    }
  }

  if (!getAnswer) {
    console.log(command);
  }
}
