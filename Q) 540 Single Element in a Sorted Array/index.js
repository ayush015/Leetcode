/*
You are given a sorted array consisting of only integers 
where every element appears exactly twice, except for one 
element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

Example:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
*/

const binarySearch = (arr) => {
  let begin = 0,
    end = arr.length - 1;

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return arr[mid];
    } else if (
      (arr[mid] === arr[mid + 1] && mid % 2 === 0) ||
      (arr[mid] === arr[mid - 1] && mid % 2 !== 0)
    ) {
      begin = mid + 1;
    } else end = mid - 1;
  }
};

var singleNonDuplicate = function (nums) {
  let output = binarySearch(nums);
  return output;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
