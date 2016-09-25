# This algorithm is to compress a string, to give a count of equivalent consecutive
# letters, such that "aabbcddeeeeaa" would equal "2a2b1c2d4e2a". If the compressed
# string has a length equal to or greater than the original string, the original string
# will be returned.

# Write the string compression method

def string_compression(str)
  new_str = ""
  counter = 1
  current_letter = str[0]
  str.split("")[1..-1].each do |letter|
    if letter == current_letter
      counter += 1
    else
      new_str += counter.to_s + current_letter
      current_letter = letter
      counter = 1
    end
  end
  new_str += counter.to_s + current_letter
  if new_str.length >= str.length
    return str
  else
    return new_str
  end
end

# Create strings and call string compression method on them

str = "aaabbeeddccccdd"

puts string_compression(str)

str = "abcdef"

puts string_compression(str)