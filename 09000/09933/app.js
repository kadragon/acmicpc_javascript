const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const passwords = input.split("\n").slice(1);

for (const password of passwords) {
  const reversePassword = password.split("").reverse().join("");
  if (passwords.includes(reversePassword)) {
    console.log(
      `${password.length} ${password[Math.floor(password.length / 2)]}`
    );
    return;
  }
}
