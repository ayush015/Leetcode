/*
Given two strings s and t, return true if they 
are equal when both are typed into 
empty text editors.'#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example: 
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/

var removeBackspaceCharacter = (str) => {
  let newStr = "";

  if (str.search("#") < 0) return str;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "#") {
      str = str.replace(str.slice(i - 1, i + 1), "");
      i = 0;
    }
  }
  return str;
};

var backspaceCompare = function (s, t) {
  let newS = removeBackspaceCharacter(s);
  let newT = removeBackspaceCharacter(t);

  if (newS.search("#") >= 0) {
    newS = newS.replace("#", "");
  }
  if (newT.search("#") >= 0) {
    newT = newT.replace("#", "");
  }

  console.log(newS);
  console.log(newT);

  if (newS === newT) return true;

  return false;
};

console.log(backspaceCompare("a##c", "#a#c"));
