function solution(input) {
  const result = new Set();
  const length = input.length;
  const charArray = input.split("");

  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }

  function shouldSwap(str, start, curr) {
    for (let i = start; i < curr; i++) {
      if (str[i] === str[curr]) {
        return false;
      }
    }
    return true;
  }

  function permute(array, index) {
    if (index === length) {
      const str = array.join("");
      if (!/(.)\1/.test(str)) {
        result.add(str);
      }
      return;
    }

    for (let i = index; i < length; i++) {
      if (shouldSwap(array, index, i)) {
        swap(array, index, i);
        permute(array, index + 1);
        swap(array, index, i);
      }
    }
  }

  permute(charArray, 0);
  return result.size;
}

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
