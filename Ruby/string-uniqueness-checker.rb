# This algorithm is built to check if a string is made of
# only unique characters. There  are many ways to solve this 
# problem. This particular solution has a runtime of O(n). It
# also assumes that lower-case and upper-case versions of the
# same character should be counted as a duplicate, and that spaces
# and punctuation do not count toward the duplicate rule.

def is_string_unique_chars(str)
  check_chars = {}
  str.downcase.gsub(/\W/, "").split("").each do |char|
    return false if check_chars[char] == true
    check_chars[char] = true
  end
  true
end

# Run tests

puts is_string_unique_chars("abcdefghijklmnopqrstuvwxyz")
puts is_string_unique_chars("apple")
puts is_string_unique_chars("Dog Leash")
puts is_string_unique_chars("New York nights")
puts is_string_unique_chars("1234567890 yes")
puts is_string_unique_chars("112")
puts is_string_unique_chars(". . .yes . . .")