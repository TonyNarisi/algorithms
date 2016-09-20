# Define Node class

class Node
  attr_accessor :data, :left, :right

  def initialize(data)
    @data = data
    @left = nil
    @right = nil
  end

  def to_s
    print "Node with data value of #{self.data}" + "\n"
  end
end

# Define depth_first_search method

def depth_first_search(node, value)
  return node if node.data == value
  left = depth_first_search(node.left, value) if node.left
  right = depth_first_search(node.right, value) if node.right
  (left || right) || "Value not found"
end

# Build tree

head_node = Node.new(5)
head_node.left = Node.new(6)
head_node.right = Node.new(8)
head_node.left.left = Node.new(78)
head_node.left.right = Node.new(87)
head_node.right.left = Node.new(4)
head_node.right.right = Node.new(9)

# Run method

print depth_first_search(head_node, 77)