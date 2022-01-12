const romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i of s) {
    sum += symbols[i];
  }
  return sum;
};

Number.MIN_SAFE_INTEGER

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
