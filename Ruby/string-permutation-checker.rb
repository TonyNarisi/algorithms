# This method detects if one string is a permutation of the
# other by sorting each string and comparing the end results.

def string_permutation_checker(str1, str2)
  if str1.length == str2.length
    return true if str1.split("").sort == str2.split("").sort
  end
  false
end

# Generate strings

str1_perm = "hello"
str2_perm = "oellh"

str1_not_perm = "hello"
str2_not_perm = "ello"

str1_still_not_perm = "hello"
str2_still_not_perm = "elloy"

# Run method on pairs of strings

puts string_permutation_checker(str1_perm, str2_perm)
puts string_permutation_checker(str1_not_perm, str2_not_perm)
puts string_permutation_checker(str1_still_not_perm, str2_still_not_perm)