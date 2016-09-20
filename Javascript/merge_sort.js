var mergeSort = function(array) {
  if (array.length === 1) {
    return array;
  }
  var midpoint = array.length/2;
  var leftArray = mergeSort(array.slice(0, midpoint));
  var rightArray = mergeSort(array.slice(midpoint, array.length));
  return merge(leftArray, rightArray);
};

var merge = function(leftArray, rightArray) {
  var mergedArray = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else if (leftArray[leftIndex] > rightArray[rightIndex]) {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    } else {
      mergedArray.push(leftArray[leftIndex], rightArray[rightIndex]);
      leftIndex += 1;
      rightIndex += 1;
    }
  }
  if (leftIndex < leftArray.length) {
    Array.prototype.push.apply(mergedArray, leftArray.slice(leftIndex, leftArray.length));
  } else if (rightIndex < rightArray.length) {
    Array.prototype.push.apply(mergedArray, rightArray.slice(rightIndex, rightArray.length));
  }
  return mergedArray;
}