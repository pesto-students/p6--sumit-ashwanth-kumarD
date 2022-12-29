class Node {
    constructor(ele) {
      this.data = ele;
      this.next = null;
    }
  }
  function detectLoop(node) {
    let slow = node,
      fast = node;
    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        console.log("loop exist");
        //removeLoop(slow, node);
        return true;
      }
    }
    return false;
  }
 
  let head = new Node(31);
  head.next = new Node(45);
  head.next.next = new Node(75);
  head.next.next.next = new Node(7);
  head.next.next.next.next = new Node(14);
  //orginal list
  console.log(detectLoop(head));
  //looping the list
  head.next.next.next.next = head.next;
  console.log(detectLoop(head));