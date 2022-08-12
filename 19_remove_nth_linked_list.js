function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  for (let i=0; i<n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
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

removeNthFromEnd(head, 2);