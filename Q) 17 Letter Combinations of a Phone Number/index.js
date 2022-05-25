/*
Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number 
could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) 
is given below. Note that 1 does not map to any letters.

Example:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

var letterCombinations = function (digits) {
  const obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (digits.length === 0) return [];
  if (digits.length === 1) {
    return obj[digits].split("");
  }
  let result = [...obj[digits[0]]];

  for (let i = 1; i < digits.length; i++) {
    let newArr = [];
    for (let j = 0; j < result.length; j++)
      for (const c of obj[digits[i]]) {
        newArr.push(result[j] + c);
      }
    result = newArr;
  }
  return result;
};
