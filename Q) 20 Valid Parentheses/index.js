/*
Given a string s containing just the characters '(', ')', 
'{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example:
Input: s = "()"
Output: true
*/
var isValid = function (s) {
  let closingBracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  let zero = s.charAt(0);
  if (zero === ")" || zero === "}" || zero === "]") return false;
  for (let i = 0; i < s.length; i++) {
    if (closingBracket[s.charAt(i)]) {
      stack.push(closingBracket[s.charAt(i)]);
    } else if (s.charAt(i) !== stack.pop()) {
      return false;
    }
  }
  return stack.length ? false : true;
};
