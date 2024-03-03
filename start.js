const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const { exec } = require("child_process");

const solveCode = `const solution = (input) => {};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;`;

/**
 * Executes a shell command and returns a promise that resolves
 * with the command's output or rejects with an error message.
 *
 * @param {string} cmd - The command to be executed
 * @return {Promise<string>} A promise that resolves with the command's
 * output or rejects with an error message
 */
function executeCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, output, errOutput) => {
      if (err) {
        reject(`Error: ${err.message}`);
        return;
      }
      if (errOutput) {
        reject(`Error output: ${errOutput}`);
        return;
      }
      resolve(output);
    });
  });
}

/**
 * Fetches problem data from acmicpc.net by ID, parses
 * it for sample inputs and outputs.
 *
 * @param {String} id - The unique identifier of the problem
 * @return {Object} An object containing arrays of sample
 * inputs and outputs
 */
const fetchProblemData = async (id) => {
  const endpoint = `https://www.acmicpc.net/problem/${id}`;
  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
    "AppleWebKit/537.36 (KHTML, like Gecko) " +
    "Chrome/58.0.3029.110 Safari/537.3";

  try {
    const response = await axios.get(endpoint, {
      headers: { "User-Agent": userAgent },
    });
    const parsedHTML = cheerio.load(response.data);
    const samples = { inputs: [], outputs: [] };

    parsedHTML('[id^="sample-input-"]').each((_, elem) => {
      samples.inputs.push(parsedHTML(elem).text().trim());
    });

    parsedHTML('[id^="sample-output-"]').each((_, elem) => {
      samples.outputs.push(parsedHTML(elem).text().trim());
    });

    for (let i = 0; i < samples.outputs.length; i++) {
      if (isNaN(samples.outputs[i])) {
        samples.outputs[i] = `\`${samples.outputs[i]}\``;
      }
    }

    return samples;
  } catch {
    // Handle errors silently or add error handling as needed
  }
};

/**
 * Creates a directory for a given ID and initializes files with test cases.
 *
 * @param {number} id - The unique identifier for creating the directory.
 * @param {string[]} testInputs - Array of test input strings.
 * @param {string[]} testOutputs - Array of expected outputs for the tests.
 * @return {string} The path to the created directory.
 */
const createDirWithFiles = (id, testInputs, testOutputs) => {
  const topDir = Math.floor(id / 10000) * 10000;
  const baseDir = Math.floor(id / 1000) * 1000;
  const dirPath = path.join(
    __dirname,
    `${topDir.toString().padStart(5, "0")}`,
    `${baseDir.toString().padStart(5, "0")}`,
    `${id.toString().padStart(5, "0")}`
  );
  fs.mkdirSync(dirPath, { recursive: true });

  const files = ["app.js", "app.test.js"];
  const filePaths = files.map((file) => path.join(dirPath, file));

  const testFileLines = [
    'const { solution } = require("./app");',
    "",
    ...testInputs
      .map((input, index) => [
        `test('test${index}', () => {`,
        `  expect(solution(\`${input}\`)).toBe(${testOutputs[index]});`,
        "});",
        "",
      ])
      .flat(),
  ];

  fs.writeFileSync(filePaths[0], solveCode);
  fs.writeFileSync(filePaths[1], testFileLines.join("\n"));

  filePaths.forEach((file) => {
    executeCommand(`code -r ${file}`);
  });

  return dirPath;
};

/**
 * Processes an input to fetch problem data, create a directory,
 * and populate it with files based on the data retrieved.
 *
 * @param {string} input - The input string representing the problem number.
 * @return {void} No return value; logs output to the console.
 */
const main = (input) => {
  if (!input) {
    console.log("No argument supplied");
    return;
  }
  const number = parseInt(input, 10);
  if (isNaN(number)) {
    console.log("Invalid number supplied");
    return;
  }

  fetchProblemData(number).then((data) => {
    const folderPath = createDirWithFiles(number, data.inputs, data.outputs);
    console.log(`Created directory and files at ${folderPath}`);
  });
};

const args = process.argv.slice(2);
main(args[0]);
