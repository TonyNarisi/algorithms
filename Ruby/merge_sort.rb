def merge_sort(array)
  return array if array.length == 1
  midpoint = array.length/2
  left_array = merge_sort(array[0...midpoint])
  right_array = merge_sort(array[midpoint..-1])
  merge(left_array, right_array)
end

def merge(left_array, right_array)
  left_idx = 0
  right_idx = 0
  merged_array = []
  until left_idx == left_array.length || right_idx == right_array.length
    if left_array[left_idx] < right_array[right_idx]
      merged_array << left_array[left_idx]
      left_idx += 1
    elsif left_array[left_idx] > right_array[right_idx]
      merged_array << right_array[right_idx]
      right_idx += 1
    elsif left_array[left_idx] == right_array[right_idx]
      merged_array << left_array[left_idx]
      merged_array << right_array[right_idx]
      left_idx += 1
      right_idx += 1
    end
  end
  merged_array.concat(left_array[left_idx..-1]) if left_idx < left_array.length
  merged_array.concat(right_array[right_idx..-1]) if right_idx < right_array.length
  merged_array
end