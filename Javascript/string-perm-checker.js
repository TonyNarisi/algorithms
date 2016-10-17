// This function determines if one string is a permutation of the
// other, without using a sort function.

var stringPermChecker = function(strOne, strTwo) {
  if (strOne.length === strTwo.length) {
    hashOne = {};
    hashTwo = {};
    charCounter(strOne, hashOne);
    charCounter(strTwo, hashTwo);
    lettersOne = Object.keys(hashOne);
    lettersTwo = Object.keys(hashTwo);
    if (lettersOne.length === lettersTwo.length) {
      for (var i = 0; i < lettersOne.length; i++) {
        if (hashOne[lettersOne[i]] != hashTwo[lettersOne[i]]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

var charCounter = function(str, hash) {
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }
}

// Generate strings

strOnePerm = "hello";
strTwoPerm = "olleh";

strOneNotPerm = "hello";
strTwoNotPerm = "ello";

strOneStillNotPerm = "hello";
strTwoStillNotPerm = "olley";

// Test function on pairs of strings

console.log(stringPermChecker(strOnePerm, strTwoPerm));
console.log(stringPermChecker(strOneNotPerm, strTwoNotPerm));
console.log(stringPermChecker(strOneStillNotPerm, strTwoStillNotPerm));