/*
Given an array of n integers nums, a 132 pattern is a 
subsequence of three integers nums[i], nums[j] and nums[k] 
such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, 
otherwise, return false.

Example:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
*/

var find132pattern = function (nums) {
  if (nums.length < 3) return false;
  let stack1 = [];
  let stack2 = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let least = Math.min(nums[i], stack2[stack2.length - 1]);
    stack2.push(least);
  }
  console.log(stack2);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > stack2[i]) {
      while (stack1.length > 0 && stack1[stack1.length - 1] <= stack2[i])
        stack1.pop();
      if (stack1.length > 0) {
        if (stack1[stack1.length - 1] < nums[i]) return true;
      }
      stack1.push(nums[i]);
    }
  }
  return false;
};

console.log(find132pattern([1, 2, 3, 4, -4, -3, -5, -1]));
