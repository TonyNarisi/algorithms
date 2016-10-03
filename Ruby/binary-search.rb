# Define the binary search method, that will return the index value
# of a given piece of data in a sorted array

def binary_search(array, value)
  return nil if array.length == 1 && array[0] != value
  midpoint = array.length/2
  return midpoint if array[midpoint] == value
  if array[midpoint] < value
    midpoint + binary_search(array[midpoint..array.length], value) if binary_search(array[midpoint..array.length], value)
  else
    binary_search(array[0...midpoint], value)
  end
end

# Generate a sorted array

array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Call binary search method on sorted array

print binary_search(array, 2)
print binary_search(array, 4)
print binary_search(array, 6)
print binary_search(array, 8)
print binary_search(array, 10)
print binary_search(array, 12)
print binary_search(array, 14)
print binary_search(array, 16)
print binary_search(array, 18)
print binary_search(array, 20)
print binary_search(array, 21)
print binary_search(array, 11)