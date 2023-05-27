const Node = (data = null, next = null) => {
  return { data, next }
}

const LinkedList = (head = null) => {

  const append = (value) => {
    let node = head;
    if(node) {
      while(node.next) {
        node = node.next
      }
    }
    node.next = Node(value);
  };

  const prepend = function(value) {
    this.head = Node(value, head);
    head = this.head;
  }

  const size = () => {
    let node = head;
    console.log(head);
    let count = 0;
    while(node) {
      count += 1;
      node = node.next;
    }
    return count;
  };

  return { head, append, prepend, size }
}