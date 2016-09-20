# Define node class that will make up tree's nodes

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

# Define breadth-first search method

def breadth_first_search(node, value, queue = [])
  return node if node.data == value
  queue << node.left if node.left
  queue << node.right if node.right
  return false if queue.empty?
  next_node = queue.shift
  breadth_first_search(next_node, value, queue)
end

# Build tree

head_node = Node.new(5)
head_node.left = Node.new(7)
head_node.right = Node.new(8)
head_node.left.left = Node.new(6)
head_node.left.right = Node.new(80)
head_node.right.left = Node.new(76)
head_node.right.right = Node.new(65)

# Run method

print breadth_first_search(head_node, 5)