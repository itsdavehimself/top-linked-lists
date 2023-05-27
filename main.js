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

  return { head, append, prepend }
}
