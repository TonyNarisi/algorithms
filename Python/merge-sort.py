# Write merge sort function

def merge_sort(lst):
    if len(lst) <= 1:
        return lst

    midpoint = len(lst)/2
    left_list = merge_sort(lst[:midpoint])
    right_list = merge_sort(lst[midpoint:])
    return merge(left_list, right_list)

# Write merge function to call inside merge sort

def merge(left_list, right_list):
    left_index = 0
    right_index = 0
    merged_list = []

    while left_index < len(left_list) and right_index < len(right_list):
        if left_list[left_index] <= right_list[right_index]:
            merged_list.append(left_list[left_index])
            left_index += 1
        elif right_list[right_index] < left_list[left_index]:
            merged_list.append(right_list[right_index])
            right_index += 1

    if left_index < len(left_list):
        merged_list.extend(left_list[left_index:len(left_list)])
    if right_index < len(right_list):
        merged_list.extend(right_list[right_index:len(right_list)])

    return merged_list

# Create a list

lst = [4, 6, 3, 2, 5, 7, 6, 8, 5, 5, 5]

# Call merge sort function on list

print merge_sort(lst)