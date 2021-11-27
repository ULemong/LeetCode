const firstUniqChar = function (s) {
  for (const char of s) if (s.indexOf(char) === s.lastIndexOf(char)) return s.indexOf(char);
  return -1;
};

/* another solution */
const firstUniqChar = function (s) {
  const dic = {};

  for (const char of s) {
    dic[char] ? dic[char]++ : (dic[char] = 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (dic[s[i]] === 1) return i;
  }

  return -1;
};
