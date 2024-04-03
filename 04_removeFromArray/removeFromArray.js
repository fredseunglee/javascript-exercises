const removeFromArray = function (array, ...removeItems) {
  return array.filter((element) => !removeItems.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
