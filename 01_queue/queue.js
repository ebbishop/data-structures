var Queue = function () {
  this.data = [];
  this.head = 0;
  this.tail = 0;
  this.counter = 0;
}

Queue.prototype.enqueue = function(thing) {
  this.data[this.tail] = thing;
  this.tail++;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var head = this.data[this.head];
  this.head++;

  if(this.counter === 0){
    return undefined;
  }
  this.counter--;
  return head;
};

Queue.prototype.size = function() {
  return this.counter;
};