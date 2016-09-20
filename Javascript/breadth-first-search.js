// Define the node constructor function

function node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Define the breadthFirstSearch function

function breadthFirstSearch(node, value) {
  var queue = [node];
  while (queue.length > 0) {
    var currentNode = queue.shift();
    if (currentNode.data === value) {
      return currentNode;
    } else {
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return "Value not found";
}

// Create a tree
var headNode = new node(5);
headNode.left = new node(4);
headNode.right = new node(24);
headNode.left.left = new node(47);
headNode.left.right = new node(64);
headNode.right.left = new node(2);
headNode.right.right = new node(3);

// Run breadthFirstSearch function
console.log(breadthFirstSearch(headNode, 24));