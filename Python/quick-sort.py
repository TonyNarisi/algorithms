# Import random module for choosing pivot

import random

# Define the quick sort method

def quick_sort(lst, left_pointer, right_pointer):
    if left_pointer < right_pointer:
        pivot = random.randrange(left_pointer, right_pointer)
        break_point = partition(lst, left_pointer, right_pointer, pivot)
        quick_sort(lst, left_pointer, break_point - 1)
        quick_sort(lst, break_point + 1, right_pointer)

    return lst

# Define the partition method to be called by quick sort

def partition(lst, left_pointer, right_pointer, pivot):
    pivot_value = lst[pivot]
    lst[right_pointer], lst[pivot] = lst[pivot], lst[right_pointer]

    storage = left_pointer

    for i in range(left_pointer, right_pointer):
        if lst[i] < pivot_value:
            lst[i], lst[storage] = lst[storage], lst[i]
            storage += 1

    lst[storage], lst[right_pointer] = lst[right_pointer], lst[storage]

    return storage

# Create a list

lst = [5, 4, 3, 6, 5, 7, 45, 43, 23, 5, 4, 3, 65, 4, 32, 12]

# Call quick sort on the list

print quick_sort(lst, 0, len(lst) - 1)