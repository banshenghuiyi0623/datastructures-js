'use strict';

class Queue {

    constructor() {
        this.elements = [];
        this.offset = 0;
    }

    isEmpty() {
        return this.length() === 0;
    }

    length() {
        return this.elements.length - this.offset;
    }

    enqueue(el) {
        this.elements.push(el);
    }

    removeDequeued() {
        if (this.offset * 2 >= this.length()) {
            this.elements  = this.elements.slice(this.offset);
            this.offset = 0;
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            let first = this.elements[this.offset++];
            this.removeDequeued();
            return first;
        }
        return null;
    }

    front() {
        return !this.isEmpty() ? this.elements[this.offset] : null;
    }

    back() {
        return !this.isEmpty() ? this.elements[this.elements.length - 1] : null;
    }

}

module.exports = Queue;