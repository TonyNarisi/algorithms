# This algorithm is to sort a stack in place, using no additional data structures

# Define stack class

class Stack
  def initialize
    @stack = []
  end

  def push(data)
    @stack.push(data)
  end

  def pop
    @stack.pop
  end

  def peek
    @stack[@stack.length - 1]
  end

  def is_empty?
    @stack.length == 0
  end

  def to_s
    stack_string = @stack.map { |item| "#{item}, " }.join("")
    print stack_string[0..-3] + "\n"
  end
end

# Write method to sort stack

def sort_stack(stack)
  if !stack.is_empty?
    holder = stack.pop
    sort_stack(stack)
    insert_sorted(stack, holder)
  end
  return stack
end

def insert_sorted(stack, item)
  if stack.peek == nil || stack.peek < item
    stack.push(item)
  else
    holder = stack.pop
    insert_sorted(stack, item)
    stack.push(holder)
  end
end

# Create stack

stack = Stack.new

stack.push(5)
stack.push(10)
stack.push(2)
stack.push(10)
stack.push(78)
stack.push(7)

# Call method on stack

puts sort_stack(stack)