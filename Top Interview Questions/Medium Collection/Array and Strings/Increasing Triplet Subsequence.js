/* forEach 사용 */
const increasingTriplet = (nums) => {
  let small = nums[0];
  let medium = Number.MAX_SAFE_INTEGER;
  let answer = false;
  
  nums.forEach((num) => {
    if (num <= small) small = num;
    else if (num <= medium) medium = num;
    else answer = true;
  });
  return answer;
};

/* for문 사용 */
const increasingTriplet = (nums) => {
  let small = nums[0];
  let medium = Number.MAX_SAFE_INTEGER;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) small = nums[i];
    else if (nums[i] <= medium) medium = nums[i];
    else return true;
  }
  return false;
};
