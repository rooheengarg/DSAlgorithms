/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //eg.Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

var oddEvenList = function(head) {
    
    if(head == null || head.next == null){
        return head;
    }
  
    var oddHead = head;
    var odd = oddHead;
  
    var evenHead = head.next;
    var even = evenHead;
  
    while(odd != null && odd.next != null && even != null && even.next != null){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    // odd=> ListNode {
    //     val: 5,
    //     next: ListNode { val: 2, next: ListNode { val: 4, next: null } } }
    //   oddHead=> ListNode {
    //     val: 1,
    //     next:
    //      ListNode { val: 3, next: ListNode { val: 5, next: [ListNode] } } }
    //   head => ListNode {
    //     val: 1,
    //     next:
    //      ListNode { val: 3, next: ListNode { val: 5, next: [ListNode] } } }
    odd.next = evenHead;
    head = oddHead;
  
    return head;
};

