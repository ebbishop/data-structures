// personal version

function LinkedList (){
	this.head = null;
	this.tail = null;
}
// added check to see if tail existed at all previously
// and therefore doesn't try to assign previous if there is
// only one node added via addToTail
LinkedList.prototype.addToTail = function(value) {
	var node = new Node(value, null, this.tail);
	if (this.tail) {
		this.tail.next = node;
	}else{
		this.head = node;
	};
	this.tail = node;
};

LinkedList.prototype.removeHead = function() {
	if(!this.head){
		return undefined;
	}
	var returnHeadValue = this.head.value;
	if(this.head != this.tail){
		var newHead = this.head.next;
		newHead.previous = null;
		this.head = newHead;
	}else{ 
		// if there is only one item and it is both head 
		// and tail, set the new head & tail to null
		this.head = null;
		this.tail = null;
	}

	return returnHeadValue;
};

LinkedList.prototype.addToHead = function(value) {
	var node = new Node(value, this.head);
	if(this.head){
		this.head.previous = node;
	}else{
		this.tail = node;
	}
	this.head = node;
};

LinkedList.prototype.removeTail = function() {
	if(!this.tail) return;
	var returnTailValue = this.tail.value;

	this.tail = this.tail.previous;

	if(this.tail){
		this.tail.next = null;
	}else{
		this.head = null;
	}

	return returnTailValue;
};


LinkedList.prototype.search = function(searchString) {
	
	if (currNode.value == searchString) {
		return currNode;
	};
};

function Node (value, next, previous) {
	this.value = value;
	this.next = next || null;
	this.previous = previous || null;
}