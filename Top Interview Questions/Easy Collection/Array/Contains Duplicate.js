const containsDuplicate = function (nums) {
  for (const value of nums) {
    if (nums.indexOf(value) !== nums.lastIndexOf(value)) return true;
  }
  return false;
};
