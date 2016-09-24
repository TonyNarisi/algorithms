// Define a stack constructor function

function Stack() {
  this.stack = [];

  this.push = function(data) {
    this.stack.push(data);
  }

  this.pop = function() {
    return this.stack.pop();
  }

  this.peek = function() {
    return this.stack[this.stack.length - 1];
  }

  this.isEmpty = function() {
    return this.stack.length === 0;
  }
}

// Define functions to sort stack in place

function sortStack(stack) {
  if (!stack.isEmpty()) {
    var element = stack.pop();
    sortStack(stack);
    insertSorted(stack, element);
  }
  return stack.stack;
}

function insertSorted(stack, data) {
  if (stack.isEmpty() || stack.peek() < data) {
    stack.push(data);
  } else {
    var holder = stack.pop();
    insertSorted(stack, data);
    stack.push(holder);
  }
}

// Create a stack

var stack = new Stack;

stack.push(10);
stack.push(7);
stack.push(12);
stack.push(8);
stack.push(9);

// Call sort stack function

console.log(sortStack(stack));