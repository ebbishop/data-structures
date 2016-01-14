// personal version

function LinkedList (){
	this.head = null;
	this.tail = null;
}
// added check to see if tail existed at all previously
// and therefore doesn't try to assign previous if there is
// only one node added via addToTail
LinkedList.prototype.addToTail = function(value) {
	if (this.tail) {
		var prevTail = this.tail;
		var node = new Node(value, null, this.tail);
		this.tail.next = node;
	}else{
		var node = new Node(value);
	};
	
	this.tail = node;
// if only one node added via this method, assign head, too
	if(this.head == null){
		this.head = node;
	}
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
	if(this.head){
		var node = new Node(value, this.head, null);
		var prevHead = this.head;
		this.head.previous = node;
	}else{
		var node = new Node(value);
	}
	this.head = node;
	if(!this.tail){
		this.tail = node;
	}
};

LinkedList.prototype.removeTail = function() {
	if(!this.tail){
		return undefined;
	}
	var returnTailValue = this.tail.value;
	if(this.tail != this.head){
		var newTail = this.tail.previous;
		newTail.next = null;
		this.tail = newTail;
	}else{
		this.tail = null;
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