// Define the quickSort function, along with the partition function that it will call

function quickSort(array, leftPointer = 0, rightPointer = array.length - 1) {
  if (leftPointer < rightPointer) {
    var pivot = Math.floor(Math.random() * (rightPointer - leftPointer) + leftPointer);
    var breakPoint = partition(array, leftPointer, rightPointer, pivot)
    quickSort(array, leftPointer, breakPoint - 1);
    quickSort(array, breakPoint + 1, rightPointer);
  }
  return array;
}

function partition(array, leftPointer, rightPointer, pivot) {
  pivotValue = array[pivot];
  array[pivot] = array[rightPointer];
  array[rightPointer] = pivotValue;

  storageMarker = leftPointer;

  for (var i = leftPointer; i < rightPointer; i++) {
    if (array[i] < array[rightPointer]) {
      lesserValue = array[i];
      array[i] = array[storageMarker];
      array[storageMarker] = lesserValue;
      storageMarker += 1;
    }
  }

  storageValue = array[storageMarker];
  array[storageMarker] = array[rightPointer];
  array[rightPointer] = storageValue;

  return storageMarker;
}

// Define an array

var array = [7, 6, 4, 89, 67, 3, 53, 1, 2, 76, 7]

// Call the quickSort function and log the results to the console

console.log(quickSort(array));