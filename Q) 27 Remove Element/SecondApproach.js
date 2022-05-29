/*
if you are directly viewing this refer to the FirstApproach.js for 
the question asked on leetcode.com
*/

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    } else {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

/*
Here time complexity will be O(n)
*/
