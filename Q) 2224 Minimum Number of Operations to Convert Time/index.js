/*
You are given two strings current and correct representing 
two 24-hour times.

24-hour times are formatted as "HH:MM", where HH is between 
00 and 23, and MM is between 00 and 59. The earliest 24-hour 
time is 00:00, and the latest is 23:59.

In one operation you can increase the time current by 1, 5, 15, 
or 60 minutes. You can perform this operation any number of times.

Return the minimum number of operations needed to convert current 
to correct.

Example:
Input: current = "02:30", correct = "04:35"
Output: 3
Explanation:
We can convert current to correct in 3 operations as follows:
- Add 60 minutes to current. current becomes "03:30".
- Add 60 minutes to current. current becomes "04:30".
- Add 5 minutes to current. current becomes "04:35".
It can be proven that it is not possible to convert current to correct in fewer than 3 operations.
*/
var convertTime = function (current, correct) {
  const currentTime = current.split(":");
  const correctTime = correct.split(":");
  let hourDiff = 0,
    minuteDiff = 0,
    counter = 0;

  if (parseInt(correctTime[1]) > parseInt(currentTime[1])) {
    minuteDiff = parseInt(correctTime[1]) - parseInt(currentTime[1]);
    hourDiff = Math.abs(parseInt(correctTime[0]) - parseInt(currentTime[0]));
    if (hourDiff < 0) hourDiff = 0;
  } else {
    hourDiff =
      Math.abs(parseInt(correctTime[0]) - parseInt(currentTime[0])) - 1;
    minuteDiff = parseInt(correctTime[1]) + 60 - parseInt(currentTime[1]);
    if (minuteDiff === 60) {
      hourDiff += 1;
    }
    if (hourDiff < 0) hourDiff = 0;
  }
  while (parseInt(correctTime[1]) != parseInt(currentTime[1])) {
    counter++;
    if (minuteDiff > 0) {
      if (minuteDiff >= 15) {
        currentTime[1] = parseInt(currentTime[1]) + 15;
        minuteDiff -= 15;
      } else if (minuteDiff >= 5 && minuteDiff < 15) {
        currentTime[1] = parseInt(currentTime[1]) + 5;
        minuteDiff -= 5;
      } else {
        currentTime[1] = parseInt(currentTime[1]) + 1;
        minuteDiff -= 1;
      }
    }

    if (parseInt(currentTime[1]) >= 60) {
      currentTime[1] = parseInt(currentTime[1]) - 60;
      currentTime[0] = parseInt(currentTime[0]) + 1;
    }
  }

  while (parseInt(correctTime[0]) != parseInt(currentTime[0])) {
    counter++;
    if (hourDiff != 0) {
      currentTime[0] = parseInt(currentTime[0]) + 1;
    }
  }
  return counter;
};

console.log(convertTime("01:42", "02:42"));
