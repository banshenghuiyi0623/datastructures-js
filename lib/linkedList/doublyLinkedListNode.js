'use strict';

let LinkedListNode = require('./linkedListNode');

class DoublyLinkedListNode extends LinkedListNode {

    constructor(value, next, prev) {
        super(value, next);
        this.setPrev(prev);
    }

    setPrev(prev) {
        if (prev instanceof LinkedListNode) {
            this.prev = prev;
        }
        else {
            this.prev = null;
        }
    }

    getPrev() {
        return this.prev;
    }

}

module.exports = DoublyLinkedListNode;