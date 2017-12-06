'use strict';

class LinkedListNode {

    constructor(value, next) {
        this.value = value;
        this.setNext(next);
    }

    setValue(value) {
        this.value = value;
    }
    
    getValue() {
        return this.value;
    };

    setNext(next) {
        if (next instanceof LinkedListNode) {
            this.next = next;
        }
        else {
            this.next = null;
        }
    }

    getNext() {
        return this.next;
    };
}

module.exports = LinkedListNode;