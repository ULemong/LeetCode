const rotate = function (nums, k) {
  return [...nums.splice(-k), ...nums];
};
