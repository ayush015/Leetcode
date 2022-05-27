/*
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Example:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

var searchRange = function (nums, target) {
  let begin = 0,
    end = nums.length - 1,
    range = [-1, -1];

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (nums[mid] == target) {
      range[0] = mid;
      let range1 = mid,
        range2 = mid;
      while (nums[range1 - 1] == target) {
        range[0] = range1 - 1;
        --range1;
      }
      while (nums[range2] == target) {
        range[1] = range2;
        ++range2;
      }
      break;
    } else if (nums[mid] < target) {
      begin = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return [range];
    }
  }
  return range;
};
