const moveZeroes = function (nums) {
  const regExp1 = /0/g;
  const regExp2 = /0,/g;
  const num_len = nums.join('').match(regExp1).length;
  // console.log(nums.join('').replace(regExp, '').split(''));
  console.log(nums.join(',').replace(regExp2, '').split(','));
  console.log(num_len);
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
