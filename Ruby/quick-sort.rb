# Define quick sort method, which calls itself recursively

def quick_sort(arr, left_cursor = 0, right_cursor = arr.length - 1)
  if left_cursor < right_cursor
    pivot = rand(left_cursor..right_cursor)
    new_pivot = partition(arr, left_cursor, right_cursor, pivot)
    quick_sort(arr, left_cursor, new_pivot - 1)
    quick_sort(arr, new_pivot + 1, right_cursor)
  end
  arr
end

# The partition method takes the value at the pivot point
# and rearranges the array so that the lesser values are
# on the left side of the pivot point and the greater values
# are on the right side of the pivot point. It then returns
# the index of that value at the end of the method, which is its
# correct position in the sorted array, which the quick_sort
# method uses to call itself recursively on smaller and smaller 
# portions of the array, until each array is only one element.

def partition(arr, left, right, pivot)
  pivot_val = arr[pivot]
  arr[pivot] = arr[right]
  arr[right] = pivot_val

  storage = left

  (left..right-1).each do |i|
    if arr[i] < pivot_val
      storage_val = arr[storage]
      arr[storage] = arr[i]
      arr[i] = storage_val
      storage += 1
    end
  end

  storage_val = arr[storage]
  arr[storage] = arr[right]
  arr[right] = storage_val

  storage
end

# Create array

arr = [7, 8, 3, 6, 5, 5, 7, 8, 18, 18, 18, 17, 1, 2]

# Run method

puts quick_sort(arr)