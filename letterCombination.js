/**
 * @param {string} digits
 * @return {string[]}
 */

/// think of a recursive solution later.
function letterCombinations(digits) {
  // input == 23
  let combinations = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: " ",
  };

  let output = [];
  let allKeys = [];

  for (let i = 0; i < digits.length; i++) {
    if (Object.keys(combinations).includes(digits[i])) {
      let letters = combinations[parseInt(digits[i])];
      allKeys.push(letters);
    }
  }
  if (allKeys.length == 0) {
    return [];
  }

  for (let i = 0; i < allKeys[0].length; i++) {
    let tempStr = "";
    tempStr += allKeys[0][i];
    if (allKeys.length == 1) {
      output.push(allKeys[0][i]);
    } else {
      for (let j = 0; j < allKeys[1].length; j++) {
        if (allKeys.length == 2) {
          output.push(allKeys[0][i] + allKeys[1][j]);
        } else {
          for (let k = 0; k < allKeys[2].length; k++) {
            if (allKeys.length == 3) {
              output.push(allKeys[0][i] + allKeys[1][j] + allKeys[2][k]);
            } else {
              for (let l = 0; l < allKeys[3].length; l++) {
                tempStr += allKeys[3][l];
                if (allKeys.length == 4) {
                  output.push(
                    allKeys[0][i] +
                      allKeys[1][j] +
                      allKeys[2][k] +
                      allKeys[3][l]
                  );
                } else {
                  return [];
                }
              }
            }
          }
        }
      }
    }
  }
  return output;
}
digits = "234";

console.log(letterCombinations(digits));
