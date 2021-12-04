const reverse = function (x) {
  if (!x) return 0;

  const arr = String(x).split('').reverse();
  if (arr[arr.length - 1] === '-') {
    arr.unshift('-');
    arr.pop();
  }
  if (+arr.join('') < (-2) ** 31 || arr.join('') > 2 ** 31 - 1) return 0;
  if (arr[0] === '0') return +arr.join('').slice(1);
  return +arr.join('');
};
