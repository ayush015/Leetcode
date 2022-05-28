/*
You are given a string s and an integer k, a k duplicate 
removal consists of choosing k adjacent and equal letters 
from s and removing them, causing the left and the right 
side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no 
longer can.

Return the final string after all such duplicate removals 
have been made. It is guaranteed that the answer is unique.

Example:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
*/

var removeDuplicates = function (s, k) {
  let stack = [];
  let counter = [];

  for (let i = 0; i < s.length; i++) {
    let value = stack[stack.length - 1];
    if (s.charAt(i) === value) {
      stack.push(s.charAt(i));
      counter[counter.length - 1] += 1;
    } else {
      stack.push(s.charAt(i));
      counter.push(1);
    }
    if (counter[counter.length - 1] === k) {
      for (let j = 0; j < k; j++) {
        stack.pop();
      }
      counter.pop();
    }
  }
  console.log(stack);
};

removeDuplicates("deeedbbcccbdaa", 3);
