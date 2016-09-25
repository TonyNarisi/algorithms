# Define a node class that will be used to build trees

class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self):
        return "Data: %s, Left: %s, Right: %s" % (self.data, self.left, self.right)

# Write a breadth-first search function

def breadth_first_search(node, value, queue = []):
    if node.data == value:
        return node

    if node.left:
        queue.append(node.left)
    if node.right:
        queue.append(node.right)

    if len(queue) > 0:
        next_item = queue.pop(0)
        return breadth_first_search(next_item, value, queue)
    else:
        return "Value not found"

# Create a tree

head_node = Node(5)
head_node.left = Node(4)
head_node.right = Node(3)
head_node.left.left = Node(10)
head_node.left.right = Node(12)
head_node.right.left = Node(2)
head_node.right.right = Node(8)

# Call breadth-first search function on tree

print breadth_first_search(head_node, 2)
