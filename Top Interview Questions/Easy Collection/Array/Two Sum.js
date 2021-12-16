const twoSum = function (nums, target) {
  const result = [];
  nums.forEach((num, i) => {
    const diff = target - num;
    const k = nums.indexOf(diff);
    if (k > -1 && k !== i) {
      result[0] = i;
      result[1] = k;
      return true;
    }
  });
  return result;
};
