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
  };

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
  };

  const at = (index) => {
    let count = 0;
    let node = head;
    while(node) {
      if (count === index) {
        return node;
      } else {
        node = node.next;
        count += 1;
      }
    }
  };

  const pop = () => {
    let secondLastIndex = size() - 2;
    let count = 0;
    let node = head;
    while(node) {
      if (count === secondLastIndex) {
        return node.next = null;
      } else {
        node = node.next;
        count += 1;
      }
    }
  };

  const contains = (value) => {
    let node = head;
    while(node) {
      if (node.data === value) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }

  return { head, append, prepend, size, tail, at, pop, contains }
}

let node1 = Node(1);
let node2 = Node(2);
node1.next = node2;
const list = LinkedList(node1);