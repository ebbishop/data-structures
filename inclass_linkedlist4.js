// in-class version

var LinkedList = function() {
  this.head = undefined;
  this.tail = undefined;
}

LinkedList.prototype.addToTail = function(value) {
  if (this.head == undefined) {
    return this.addToHead(value); // why return here?
  } else {
    var oldtail = this.tail;
    var node = new Node(value);
    oldtail.next = node;
    this.tail = node;
    this.tail.previous = oldtail;
    // oldtail.previous = this.tail; //don't think this is right. this makes a circular ref, I think?
  }
}
LinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if (this.head == undefined){
    this.tail = node;
  }
  this.head = node;
}
console.log('some stuff');

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return undefined;
  }
  var newHead = this.head.next;
  var removedHead = this.head;
  var valToReturn = removedHead.value;
  this.head = newHead;
  console.log(this.head);
  // this.head.previous = null;
  return valToReturn;
}

LinkedList.prototype.search = function() {
  
}

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

