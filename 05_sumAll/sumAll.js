const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    num1 < 0 ||
    typeof num2 !== "number" ||
    num2 < 0
  ) {
    return "ERROR";
  }

  if (num2 < num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let finalNum = 0;
  for (let i = num1; i <= num2; i++) {
    finalNum += i;
  }
  return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
