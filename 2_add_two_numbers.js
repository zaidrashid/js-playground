/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const len = Math.max(l1.length, l2.length);
    
    let carryOver = 0;
    const sumArr = [];
    for (let i =0; i < len || carryOver === 1; i++) {
       const num1 = l1[i] || 0;
       const num2 = l2[i] || 0;
       let sum = num1 + num2 + carryOver;
       if (sum >= 10) {
           carryOver = 1;
           sum -= 10;
       } else {
           carryOver = 0;
       }
       sumArr.push(sum);
    }
    return sumArr;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));