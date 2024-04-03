const repeatString = function (repeatString, repeatCount) {
  if (repeatCount < 0) {
    return "ERROR";
  }
  let finalString = "";
  for (let i = 0; i < repeatCount; i++) {
    finalString += repeatString;
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
