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
    let count = 0;
    while(node) {
      count += 1;
      node = node.next;
    }
    return count;
  };

  const tail = () => {
    let node = head;
    if(node) {
      while(node.next) {
        node = node.next
      }
    }
    return node;
  }

  return { head, append, prepend, size, tail}
}

let node1 = Node(1);
let node2 = Node(2);
node1.next = node2;
const list = LinkedList(node1);