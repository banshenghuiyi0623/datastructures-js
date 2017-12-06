'use strict';

let LinkedListNode = require('./linkedListNode');

class LinkedList {

    constructor() {
        this.init();
    }

    init() {
        this.head = null;
        this.length = 0;
    }

    getLength() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    find(value, current = this.head) {
        if (current === null) {
            return null;
        }
        else if (current.getValue() === value) {
            return current;
        }
        else {
            return this.find(value, current.getNext());
        }
    }

    addFirst(value) {
        if (this.head === null) {
            this.head = new LinkedListNode(value);
        }
        else {
            this.head = new LinkedListNode(value, this.head);
        }
        this.length++;
    }

    addLast(value, lastNode = this.head) {
        if (lastNode === null) {
            this.head = new LinkedListNode(value);
            this.length++;
        }
        else if (lastNode.getNext() === null) {
            lastNode.setNext(new LinkedListNode(value));
            this.length++;
        }
        else {
            this.addLast(value, lastNode.getNext());
        }
    }

    addAfter(value, newValue) {
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else {
            let newValueNode = new LinkedListNode(newValue);
            if (valueNode.getNext() !== null) {
                newValueNode.setNext(valueNode.getNext());
            }
            valueNode.setNext(newValueNode);
            this.length++;
        }
    }

    addBefore(value, newValue) {
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (valueNode === this.head) {
            this.addFirst(newValue);
        }
        else {
            let current = this.head;
            while (current.getNext() !== null) {
                if (current.getNext() === valueNode) {
                    let newValueNode = new LinkedListNode(newValue);
                    newValueNode.setNext(valueNode);
                    current.setNext(newValueNode);
                    this.length++;
                    break;
                }
            }
        }
    }

    remove(value) {
        let valueNode = this.find(value);
        if (valueNode === null) {
            throw new Error('node ' + value + ' not found');
        }
        else if (valueNode === this.head) {
            this.removeFirst();
        }
        else {
            let current = this.head;
            while (current.getNext() !== null) {
                if (current.getNext() === valueNode) {
                    current.setNext(valueNode.getNext());
                    valueNode.setNext(null);
                    break;
                }
            }
            this.length--;
        }
    }

    removeFirst() {
        if (this.head !== null) {
            if (this.head.getNext() === null ) {
                this.head = null;
            }
            else {
                this.head = this.head.getNext();
            }
            this.length--;
        }
    }

    removeLast() {
        if (this.head !== null) {
            if (this.head.getNext() === null) {
                this.head = null;
            }
            else {
                let current = this.head;
                while (current.getNext() !== null) {
                    if (current.getNext().getNext() === null) {
                        current.setNext(null);
                        break;
                    }
                    else {
                        current = current.getNext();
                    }
                }
                this.length--;
            }
        }
    }

    traverse(cb, current = this.head) {
        if (current !== null) {
            cb(current.getValue());
            this.traverse(cb, current.getNext());
        }
    }

}

module.exports = LinkedList;