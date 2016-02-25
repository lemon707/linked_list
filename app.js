function linkedList() {

  this.head = this.tail = null;

}

function Node(value) {

  this.previous = this.next = null;

  this.value = value;

}

linkedList.prototype.addFront = function(int) {

  var node = new Node(int);

  if(!this.head && !this.tail) {

    this.head = this.tail = node;
  
  } else {

    this.head.previous = node;

    node.next = this.head;

    this.head = node;
  
  }

}

linkedList.prototype.display = function() {

  var nodeToDisplay = this.head;

  while(nodeToDisplay) {

    var elem = document.createElement('div');

    elem.className = 'node'

    elem.innerHTML = '{previous: ' + nodeToDisplay.previous + ', next: ' + nodeToDisplay.next + ', value: ' + nodeToDisplay.value + '}<br><br>';

    document.getElementsByTagName('body')[0].appendChild(elem);

    nodeToDisplay = nodeToDisplay.next;
  
  }

}

linkedList.prototype.addEnd = function(int) {

  var node = new Node(int);

  if(!this.head && !this.tail) {

    this.tail = this.head = node;
  
  } else {

   this.tail.next = node;

   node.previous = this.tail;

   this.tail = node;

  }

}

linkedList.prototype.addAtIndex = function(int, index) {

  var error = 'index must be 0 or above';

  if(index < 0) {

    throw error;
  
  } else {

    var node = new Node(int);

    if(!this.head && !this.tail) {

      this.head = this.tail = node;
    
    } else {

      var counter = 0;

      var currentNode = this.head;

      while(currentNode) {

        if(counter === index) {

          node.next = currentNode;

          node.previous = currentNode.previous;

          currentNode.previous.next = node;

          currentNode.previous = node;

          return;

        } else {

          counter += 1;

          currentNode = currentNode.next;
        
        }
      
      }
    
    }
  
  }

}

linkedList.prototype.removeFront = function() {

  if(!this.head && !this.tail) {

    return null;
    
  } else {

    var temp = this.head;

    this.head.next.previous = null;

    this.head = temp.next;

    return temp;

  }

}

linkedList.prototype.removeEnd = function() {

 if(!this.head && !this.tail) {

    return null;
    
  } else {

    var temp = this.tail;

    this.tail.previous.next = null;

    this.tail = temp.previous;

    return temp;

  }

}

linkedList.prototype.removeAtIndex = function(index) {

  var error = 'index must be 0 or above';

  if(index < 0) {

    throw error;
  
  } else {

    if(!this.head && !this.tail) {

      return null;
    
    } else {

      var counter = 0;

      var currentNode = this.head;

      while(currentNode) {

        if(counter === index) {

          var temp = currentNode;

          currentNode.previous.next = currentNode.next;

          currentNode.next.previous = currentNode.previous;

          currentNode = null;

          return temp;

        } else {

          counter += 1;

          currentNode = currentNode.next;
        
        }
      
      }
    
    }
  
  }

}

linkedList.prototype.getAtIndex = function(index) {

  var error = 'invalid search';

  if(index < 0) {

    throw error;
  
  } else {

    if(!this.head && !this.tail) {

      throw error;
    
    } else {

      var counter = 0;

      var currentNode = this.head;

      while(currentNode) {

        if(counter === index) {

          return currentNode;
        
        } else {

          counter += 1;

          currentNode = currentNode.next;
        
        }
      
      }
    
    }
  
  }

}

var l = new linkedList();

l.addFront(1);
l.addFront(2);
l.addEnd(3);
l.addFront(4);
l.addEnd(5);
l.addAtIndex(6,2);
l.removeFront();
l.removeEnd();
l.removeAtIndex(1);
l.display();
console.log(l)
console.log(l.getAtIndex(0))