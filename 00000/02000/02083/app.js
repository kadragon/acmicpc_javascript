const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const persons = input.split("\n").map((v) => v.split(" "));

for (const person of persons) {
  const [name, age, weight] = person;
  if (name == "#") break;

  console.log(
    `${name} ${Number(age) > 17 || Number(weight) >= 80 ? "Senior" : "Junior"}`
  );
}
