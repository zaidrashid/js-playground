function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 1 - 2 - 3 - 4 - 5
// 1 - 3 - 5 - 2 - 4
const oddEvenList = function (head) {
  if (!head) { return head; }
  const oddList = new ListNode(0);
  let currOdd = oddList;
  let curr = head;
  while (curr.next) {
    currOdd.next = new ListNode(curr.next.val);
    currOdd = currOdd.next;
    curr.next = curr.next.next;
    if (!curr.next) {
      break;
    }
    curr = curr.next;
  }
  curr.next = oddList.next;
  return head;
}

let head = new ListNode(1);
let curr = head;
curr.next = new ListNode(2);
curr = curr.next;
curr.next = new ListNode(3);
curr = curr.next;
curr.next = new ListNode(4);
curr = curr.next;
curr.next = new ListNode(5);
curr = curr.next;
curr.next = new ListNode(6);
curr = curr.next;
curr.next = new ListNode(7);
curr = curr.next;
curr.next = new ListNode(8);
oddEvenList(head);