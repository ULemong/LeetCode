const searchInsert = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target);
    else {
        nums.push(target);
        nums.sort((x, y) => x - y);
        return nums.indexOf(target);
    }
};
