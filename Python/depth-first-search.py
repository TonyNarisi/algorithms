# Define the node class to use in the tree

class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self):
        return "Data: %s" % (self.data)

# Define the depth first search method

def depth_first_search(node, value):
    if node.data == value:
        return node
    else:
        left = False
        right = False
        if node.left:
            left = depth_first_search(node.left, value)
        if node.right:
            right = depth_first_search(node.right, value)
        return left or right

# Create tree

head_node = Node(5)
head_node.left = Node(8)
head_node.right = Node(6)
head_node.left.left = Node(70)
head_node.left.right = Node(90)
head_node.right.left = Node(10)
head_node.right.right = Node(15)

# Call depth first search on tree

print depth_first_search(head_node, 14)