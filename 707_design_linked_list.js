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
        this.addAtHead(val);
        return;
    }
    let currNode = this.head;
    while(!!currNode.next) {
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
    
    if (index > this.getLength()) return;
    
    let node = new Node(val);
    let curr = this.head;
    for (let i=0; i<index - 1; i++) {
        curr = curr.next; 
    }
    let next = curr.next;
    curr.next = node;
    node.next = next;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let curr = this.head;
    for (let i=0; i<index - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next; 
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
// obj.addAtHead(7)
// obj.addAtHead(2)
// obj.addAtHead(1)
// obj.addAtIndex(3, 0)
// obj.deleteAtIndex(2)
// obj.addAtHead(6)
// obj.addAtTail(4)
// obj.get(4);
// obj.addAtHead(4)
// obj.addAtIndex(5, 0)
// obj.addAtHead(6)

// obj.addAtHead(1)
// obj.addAtTail(3)
// let param_1 = obj.get(1) // 3
// obj.addAtIndex(1,2)
// param_1 = obj.get(1) // 2
// obj.deleteAtIndex(0)
// param_1 = obj.get(0) // 3

// obj.addAtTail(1)
// obj.get(0)
let commands = ["MyLinkedList","addAtHead","addAtIndex","addAtTail","addAtTail","addAtTail","addAtIndex","addAtTail","addAtHead","deleteAtIndex","deleteAtIndex","deleteAtIndex","addAtIndex","addAtTail","get","get","addAtHead","addAtTail","addAtTail","get","addAtTail","addAtTail","deleteAtIndex","deleteAtIndex","addAtHead","addAtTail","addAtIndex","get","addAtTail","addAtIndex","addAtHead","addAtTail","addAtIndex","get","addAtHead","addAtTail","addAtIndex","addAtHead","addAtIndex","addAtTail","addAtHead","addAtIndex","addAtTail","addAtHead","deleteAtIndex","get","addAtIndex","get","addAtIndex","addAtTail","addAtTail","get","deleteAtIndex","get","addAtHead","addAtTail","addAtIndex","addAtIndex","addAtIndex","addAtHead","addAtTail","addAtIndex","deleteAtIndex","addAtHead","addAtHead","addAtTail","get","addAtTail","addAtIndex","addAtHead","deleteAtIndex","addAtHead","deleteAtIndex","get","get","addAtTail","addAtIndex","get","deleteAtIndex","deleteAtIndex","addAtHead","addAtHead","addAtIndex","get","addAtTail","addAtHead","addAtIndex","get","addAtHead","deleteAtIndex","deleteAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtTail","addAtHead","addAtHead","deleteAtIndex","get","addAtHead"]
let inputArr = [[],[55],[1,90],[51],[91],[12],[2,72],[17],[82],[4],[7],[7],[5,75],[54],[6],[2],[8],[35],[36],[10],[40],[43],[12],[3],[78],[89],[3,41],[10],[96],[5,37],[51],[26],[16,91],[18],[11],[66],[22,20],[44],[17,16],[95],[2],[14,2],[99],[51],[1],[11],[22,99],[20],[25,42],[72],[45],[2],[4],[32],[55],[84],[32,64],[26,14],[30,80],[88],[51],[27,71],[15],[8],[60],[37],[25],[96],[25,53],[36],[8],[85],[42],[20],[34],[78],[42,76],[26],[30],[39],[27],[93],[19,75],[8],[24],[32],[25,98],[21],[95],[18],[45],[24],[38],[8],[20],[83],[71],[78],[55],[29],[11],[84]]
if (commands.length !== inputArr.length) {
    console.log('length not the same');
}

for (let i=1; i < commands.length; i++){
    let command = commands[i];

    let input = inputArr[i];
    console.log(`${i}: '${command}' ${input[0]} ${input[1]}`);
    const res = obj[command](input[0], input[1]);
    if (res) {
        console.log(`${res}`);
    }
}
console.log('finished');