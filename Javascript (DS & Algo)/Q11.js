// Q11. Implement Stack class in JS.

class Stack {
  constructor() {
    this.data = []; // array created to store stack data
    this.top = 0;
  }

  //inserts the new element at the top of previous element
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  //to return the last element of stack
  peek() {
    return this.data[this.top - 1];
  }

  // to check if stack is empty or not
  isEmpty() {
    return this.top === 0;
  }

  //removes the last element inserted in stack
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop(); // removes the last element
    }
  }

  //traverses through the entire stack prints the element from last element inserted to the first element inserted
  print() {
    var top = this.top - 1; // because top points to index where new    element to be inserted
    while (top >= 0) {
      // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
  }
}
