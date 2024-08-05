const reverseString = function(word) {
  let reverseString = '';
  let wordLength = word.length;
  for (let i = wordLength; i > 0; i--) {
    reverseString += word.at(i - 1);
  }

  return reverseString

};

// Do not edit below this line
module.exports = reverseString;
