# This method is used to find the highest value contained
# within a stack.

class Stack(object):
    def __init__(self):
        self.stack = []
        self.max_stack = []

    def push(self, data):
        self.stack.append(data)
        if len(self.max_stack) == 0 or data > self.max_stack[len(self.max_stack) - 1]:
            self.max_stack.append(data)
        else:
            self.max_stack.append(self.max_stack[len(self.max_stack) - 1])

    def pop(self):
        self.stack.pop()
        self.max_stack.pop()

    def peek(self):
        return self.stack[-1]

    def max(self):
        return self.max_stack[-1]

# Generate a stack

stack = Stack()
stack.push(5)
stack.push(7)
stack.push(4)
stack.push(8)
stack.push(5)
stack.push(6)

# Test max function at different points

print stack.max()
stack.pop()
print stack.max()
stack.pop()
stack.pop()
print stack.max()
stack.pop()
print stack.max()
stack.pop()
print stack.max()
