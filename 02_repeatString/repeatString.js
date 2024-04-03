const repeatString = function (repeatString, repeatCount) {
  if (repeatCount < 0) {
    return "ERROR";
  }
  let finalString = repeatString.repeat(repeatCount);

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
