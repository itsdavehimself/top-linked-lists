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
  };

  const find = (value) => {
    let node = head;
    let index = 0;
    while(node) {
      if (node.data === value) {
        return index;
      } else {
        index += 1;
        node = node.next;
      }
    }
    return null;
  };

  const toString = () => {
    let node = head;
    let listString = '';
    while(node) {
      let data = node.data.toString();
      listString = listString.concat(`( ${data} ) -> `);
      node = node.next
      if (node === null) {
        listString = listString.concat('null');
      }
    }
    return listString;
  };

  const insertAt = function(value, index) {
    let count = 0;
    let node = head;
    while(node) {
      if (count === index - 1) {
        node.next = Node(value, node.next);
        return;
      } else {
        node = node.next;
        count += 1;
      }
    }
  };

  const removeAt = function(index) {
    let count = 0;
    let node = head;
    let previousNode;
    let nextNode;
    while(node) {
      if (count === index - 1) {
        previousNode = node;
        node = node.next;
        count += 1;
      }
      if (count === index) {
        nextNode = node.next;
        node = node.next;
        count += 1;
      } else {
        node = node.next;
      }
    }
    previousNode.next = nextNode;
  };

  return { head, append, prepend, size, tail, at, pop, contains, find, toString, insertAt, removeAt }
};