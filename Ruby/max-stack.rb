# Define the stack class

class Stack
  def initialize
    @stack = []
    @max_stack = []
  end

  def push(data)
    @stack.push(data)
    if @max_stack.length == 0 || @max_stack.last < data
      @max_stack.push(data)
    else
      @max_stack.push(@max_stack.last)
    end
  end

  def pop
    @max_stack.pop
    @stack.pop
  end

  def peek
    @stack.last
  end

  def max
    @max_stack.last
  end
end

# Create a stack

stack = Stack.new
stack.push(5)
stack.push(10)
stack.push(6)
stack.push(8)
stack.push(9)

# Call max function

puts stack.max
stack.push(11)
puts stack.max
stack.pop
puts stack.max