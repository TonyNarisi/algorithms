// Define stack constructor function, with maxStack and max function inside of it

function Stack() {
  this.stack = [];
  this.maxStack = []

  this.push = function(data) {
    this.stack.push(data);
    if (this.maxStack.length === 0 || this.maxStack[this.maxStack.length - 1] < data) {
      this.maxStack.push(data);
    } else {
      this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
    }
  }

  this.pop = function() {
    this.maxStack.pop();
    return this.stack.pop();
  }

  this.peek = function() {
    return this.stack[this.stack.length - 1];
  }

  this.max = function() {
    return this.maxStack[this.stack.length - 1];
  }
}

// Create a stack

var stack = new Stack()

stack.push(5);
stack.push(7);
stack.push(6);
stack.push(8);
stack.push(6);

// Test max function at different points

console.log(stack.max());
stack.pop();
stack.pop();
console.log(stack.max());
stack.push(10);
console.log(stack.max());
stack.push(7);
console.log(stack.max());