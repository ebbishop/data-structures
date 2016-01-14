function LinkedList (){
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
	var node = new Node(value);
	this.tail = node;
	if(this.head == null){
		this.head = node;
	}};

LinkedList.prototype.removeHead = function(first_argument) {
	// body...
};

LinkedList.prototype.addToHead = function(value) {
	var node = new Node(value);
	this.head = node;
	if(!this.tail){
		this.tail = node;
	}
};

LinkedList.prototype.search = function(first_argument) {
	// body...
};

LinkedList.prototype.isEmpty = function() {
	// body...
};

function Node (value) {
	this.value = value;
	this.next = null;
	this.previous = null;
}