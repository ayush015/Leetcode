/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the 
array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform 
on the array.


Example:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
*/

var maxOperations = function (nums, k) {
  let counter = 0;
  let begin = 0,
    end = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (begin < end) {
    let sum = nums[begin] + nums[end];
    if (sum === k) {
      counter++;
      begin++;
      end--;
    } else if (sum < k) {
      begin++;
    } else end--;
  }

  console.log(counter);
};
maxOperations([1, 2, 3, 4], 5);
maxOperations([3, 1, 3, 4, 3], 6);
maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2);

maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3);
