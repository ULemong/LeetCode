const singleNumber = function (nums) {
  for (const i of nums) if (nums.indexOf(i) === nums.lastIndexOf(i)) return i;
};
