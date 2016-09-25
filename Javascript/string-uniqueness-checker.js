// Define function to determine if a string is made of unique characters. This
// function assumes that punctuation and whitespace are not being taken into consideration.

var isStringUniqueChars = function(str) {
  charChecker = {};
  for (var i = 0; i < str.length; i++) {
    if (str[i].search(/\w/) === 0) {
      if (charChecker[str[i]] === true) {
        return false;
      } else {
        charChecker[str[i]] = true;
      }
    }
  }
  return true;
}

// Create strings and call function on them

var strOne = "abcdefghijklmnopqrstuvwxyz";

console.log(isStringUniqueChars(strOne));

var strTwo = "abbc";

console.log(isStringUniqueChars(strTwo));

var strThree = "a   ...... b";

console.log(isStringUniqueChars(strThree));