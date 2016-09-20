// Define node constructor function

function node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Define depthFirstSearch function

function depthFirstSearch(node, value) {
  if (node.data === value) {
    return node;
  }
  if (node.left) {
    if (depthFirstSearch(node.left, value)) {
      return depthFirstSearch(node.left, value);
    } else {
      return depthFirstSearch(node.right, value);
    }
  }
}

// Build tree

var headNode = new node(5);
headNode.left = new node(4);
headNode.right = new node(2);
headNode.left.left = new node(25);
headNode.left.right = new node(87);
headNode.right.left = new node(65);
headNode.right.right = new node(3);

// Run the function

console.log(depthFirstSearch(headNode, 65));