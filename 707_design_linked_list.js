var Node = function(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = val === undefined ? null : next;
}

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength()) return -1;
    let node = this.head;
    for (let i = 0; i<index; i++) {
        node = node.next;
    }
    return node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    node.next= this.head;
    this.head = node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (!this.head) {
        this.addAtHead(head);
        return;
    }
    let currNode = this.head;
    while(currNode.next !== null) {
        currNode = currNode.next;
    }
    let node = new Node(val);
    currNode.next = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    
    if (index === this.getLength()) {
        this.addAtTail(val);
        return;
    }
    
    let node = new Node(val);
    let curr = this.head;
    for (let i=0; i<index - 1; i++) {
        curr = curr.next; 
    }
    let next = curr.next;
    node.next = next;
    curr.next = node;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) return;
    let curr = this.head;
    for (let i=0; i<index - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next ? curr.next.next : null; 
};

MyLinkedList.prototype.getLength = function() {
    let len = 0, cur = this.head;
    while (!!cur) {
        cur = cur.next;
        len++;
    }
    return len;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var obj = new MyLinkedList()
// obj.addAtHead(1)
// obj.addAtTail(3)
// let param_1 = obj.get(1) // 3
// obj.addAtIndex(1,2)
// param_1 = obj.get(1) // 2
// obj.deleteAtIndex(1)
// param_1 = obj.get(1) // 3

// ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
// [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]] 
obj.addAtHead(7)
obj.addAtHead(2)
obj.addAtHead(1)
obj.addAtIndex(3, 0)
obj.deleteAtIndex(2)
obj.addAtHead(6)
obj.addAtTail(4)
obj.get(4);
obj.addAtHead(4)
obj.addAtIndex(5, 0)
obj.addAtHead(6)