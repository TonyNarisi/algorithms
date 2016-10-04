// Define the binary search function

binarySearch = function(array, value) {
  if (array.length === 1 && array[0] != value) {
    return null;
  }
  var midpoint = Math.floor(array.length/2);
  if (array[midpoint] === value) {
    return midpoint;
  }
  if (array[midpoint] < value) {
    if (binarySearch(array.slice(midpoint, array.length), value)) {
      return midpoint + binarySearch(array.slice(midpoint, array.length), value);
    }
  } else if (array[midpoint] > value) {
    return binarySearch(array.slice(0, midpoint), value);
  }
}

// Generate a sorted array

var array = [2, 4, 6, 8, 10, 12, 14, 16, 18];

// Call binary search function on sorted array

console.log(binarySearch(array, 2));
console.log(binarySearch(array, 4));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 8));
console.log(binarySearch(array, 10));
console.log(binarySearch(array, 12));
console.log(binarySearch(array, 14));
console.log(binarySearch(array, 16));
console.log(binarySearch(array, 18));