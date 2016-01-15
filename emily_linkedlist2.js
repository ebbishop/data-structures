LinkedList.prototype.addToTail = function(thing) {
  if (this.head === undefined) {
    return this.addToHead(thing);
  } else {
    var oldtail = this.tail;
    var node = new Node(thing);
    oldtail.next = node;
    this.tail = node;
    this.tail.previous = oldtail;
    oldtail.previous = this.tail; //i don't think this is right
  }
}
LinkedList.prototype.addToHead = function(firstThing) {
  var firstNode = new Node(firstThing);
  this.head = firstNode;
  this.tail = firstNode;
}
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return undefined;
  }
  var newhead = this.head.previous; //should be this.head.next
  var headToReturn = this.head;
  var valToReturn = headToReturn.value;
  this.head = newhead;
  this.head.next = null;
  return valToReturn;
}