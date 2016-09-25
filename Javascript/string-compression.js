// This algorithm is to compress a string, to give a count of equivalent consecutive 
// letters, such that "aabbccddeeeeeeea" would equal "2a2b2c2d7e1a". If the compressed
// string has a length equal to or greater than the original string, the original string
// will be returned.

// Write the string compression function

var compressString = function(str) {
  newStr = "";
  counter = 1;
  currentLetter = str[0];
  for (var i = 1; i < str.length; i++) {
    if (str[i] === currentLetter) {
      counter += 1;
    } else {
      newStr += currentLetter + counter.toString();
      counter = 1;
      currentLetter = str[i];
    }
  }
  newStr += currentLetter + counter.toString();
  if (newStr.length < str.length) {
    return newStr;
  } else {
    return str;
  }
}

// Create strings and call string compression function on them

strOne = "aabbccddeeeeeeea";

console.log(compressString(strOne));

strTwo = "aabcdef";

console.log(compressString(strTwo));