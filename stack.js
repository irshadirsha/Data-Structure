// Create an empty stack
const stack = [];

// Push an element onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop an element from the stack
const poppedElement = stack.pop();
console.log("Popped Element: " + poppedElement);

// Peek at the top element without removing it
const topElement = stack[stack.length - 1];
console.log("Top Element: " + topElement);

// Check if the stack is empty
const isEmpty = stack.length === 0;
console.log("Is the stack empty? " + isEmpty);
