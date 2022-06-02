/*
the above solution is 70% successfull (that means it passes 
70% test cases) but not suitable for some edge case such as 
if array is [2,4,1] the above solution will return 0 where it 
should return 2 (4-2) profit
*/
var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let max = 0;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      max = Math.max(max, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
};

console.log(maxProfit([2, 4, 1]));
