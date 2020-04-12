// Q12. Implement Queue class in JS.

//it uses FIFO
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // enqueue(item)
  //adds the element at the rear of queue
  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }
  // dequeue()
  //removes the element from the front of queue
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  // front()
  //it returns the front element
  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // isEmpty()
  //it checks for queue is empty or not
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
  // printQueue()
  //it prints the element from front to rear in queue
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
