'use strict';

class Stack {

    constructor() {
        this.top = 0;
        this.elements = [];
    }

    isEmpty() {
        return this.top === 0;
    }

    length() {
        return this.top;
    }

    push(el) {
        this.elements.push(el);
        this.top++;
    }
 
    removedPopped() {
        if (this.top * 2 <= this.elements.length) {
            this.elements  = this.elements.slice(0, this.top);
        }
    }

    pop() {
        if (!this.isEmpty()) {
            let last = this.elements[--this.top];
            this.removedPopped();
            return last;
        }
        return null;
    }

    peek() {
        return !this.isEmpty() ? this.elements[this.top - 1] : null;
    }
}

module.exports = Stack;