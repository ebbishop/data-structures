var LinkedList = function() {
  this.head = undefined;
  this.tail = undefined;
}

LinkedList.prototype.addToTail = function(thing1) {
  if (!this.head) {
    this.addToHead(thing1);
  } else {
    var node = new Node(thing1);
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
}

LinkedList.prototype.addToHead = function(thing2) {
  var node = new Node(thing2);
  this.head = node;
  this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return undefined;
  }

  var headToReturn = this.head;
  var valToReturn = headToReturn.value;
  this.head = headToReturn.previous;
  return valToReturn;
}

LinkedList.prototype.search = function() {
  
}

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}