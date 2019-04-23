// Linked List
function linkedList() {

    var length = 0;
    var head = null;

    // Create node
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    // Return linked list length    
    this.getLength = function () {
        return length;
    }

    // Return head element
    this.getHead = function () {
        return head;
    }

    // Check if linked list contains the given element
    this.exists = function (givenElement) {
        // Check if Linked List is empty
        if (head === null) {
            console.log("List is empty");
            return false;
        }
        // Linked List is not empty
        else {
            // Traverse the Linked List
            var currentNode = head;

            // Linked list has one element
            if (currentNode.next == null) {
                if (currentNode.element == givenElement) {
                    return true;
                } else {
                    return false;
                }
            }

            // Linked list has more than one element
            while (currentNode.next) {
                if (currentNode.element == givenElement) {
                    return true;
                } else {
                    currentNode = currentNode.next;
                }
            }

            // Check last element
            if (currentNode.element == givenElement) {
                return true;
            } else {
                return false;
            }
        }
    }

    // Return the given element's index
    this.indexOf = function (givenElement) {
        // Check if Linked List is empty
        if (head === null) {
            console.log("List is empty")
        }
        // Linked List is not empty
        else {
            // Traverse the Linked List
            var currentNode = head;

            // Linked list has one element
            if (currentNode.next == null) {
                if (currentNode.element == givenElement) {
                    return 0;
                } else {
                    return "Not Present";
                }
            }

            // Linked list has more than one element
            var index = 0;
            while (currentNode.next) {
                if (currentNode.element == givenElement) {
                    return index;
                } else {
                    currentNode = currentNode.next;
                    index++;
                }
            }

            // Check last element
            if (currentNode.element == givenElement) {
                return index;
            } else {
                return "Not Present";
            }

        }
    }

    // Check if linked list is null
    this.isNull = function () {
        return length == 0;
    }

    // Display linked list
    this.display = function () {

        // Check if Linked List is empty
        if (head === null) {
            console.log("List is empty")
        }
        // Linked List is not empty
        else {
            // Traverse the Linked List
            var currentNode = head;
            while (currentNode) {
                console.log(currentNode.element);
                currentNode = currentNode.next;
            }
        }
    }

    // Add a new node to the linked list
    this.addNode = function (element) {
        var newNode = new Node(element);

        // Check if Linked List is empty
        if (head === null) {
            head = newNode
        }
        // Linked List is not empty
        else {
            // Traverse the Linked List
            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            // Append given node to Linked List
            currentNode.next = newNode;
        }
        length++;
    }

    // Add a new node to the start of linked list 
    this.addNodeToStart = function (element) {
        var newNode = new Node(element);

        newNode.next = head;
        head = newNode;
        length++;
    }

    // Add a new node to a given of linked list 
    this.addNodeSpecific = function (givenElement, index) {
        var newNode = new Node(givenElement);

        // Check if given index is in bounds of the linked list
        if (0 <= index && index <= this.getLength()) {
            // TODO
        }
        // Given index is out of bounds of the linked list
        else {
            return "Index is out of bounds";
        }
    }

    // Remove a certain element from the linked list
    this.removeNode = function (givenElement) {
        // Check if Linked List is empty
        if (head === null) {
            console.error("Linked list is empty")
        }
        // Linked List is not empty
        else {
            // Traverse the Linked List
            var currentNode = head;
            while (currentNode.next) {
                // Check if next node is our given element
                if ((currentNode.next).element == givenElement) {
                    var nodeToRemove = currentNode.next;

                    // Delink previous node and node to remove by
                    // linking previous node to the node after 
                    // given node
                    currentNode.next = nodeToRemove.next;

                    // Delink node to remove by linking it to null
                    nodeToRemove.next = null;
                    length--;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
    }

    // Remove the first element from the linked list
    this.removeFirstNode = function () {
        // Check if Linked List is empty
        if (head === null) {
            console.error("Linked list is empty")
        }
        // Linked List is not empty
        else {
            head = head.next;
            length--;
        }
    }

    // Remove the last element from the linked list
    this.removeLastNode = function () {
        // Check if Linked List is empty
        if (head === null) {
            console.error("Linked list is empty")
        }
        // Linked List is not empty
        else {
            // Traverse the linked list
            var currentNode = head;
            var previousNode = currentNode;

            // Linked list has only one element
            if (currentNode.next == null) {
                head = null;
            }
            // Linked list has more than one element            
            else {
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
            }
            length--;
        }
    }
}

var testList = new linkedList();

testList.addNode(5);
testList.addNode(10);
testList.addNode(15);

testList.display();
console.log("----------------")
