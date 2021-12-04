const reverse = function (x) {
  // reverse 시 0으로 시작하고, 2자 이상일 때
  const a = String(x).split('').reverse().join('');
  const regExp = /[^0]/g;
  console.log(a.match(regExp));
};

console.log(reverse(-102));
