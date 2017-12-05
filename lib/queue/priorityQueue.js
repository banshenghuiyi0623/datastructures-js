'use strict';

class PriorityQueue {

    constructor() {
        this.elements = [];
        this.offset = 0;
        this.priorities = {};
    }

    isEmpty() {
        return this.length() === 0;
    }

    length() {
        return this.elements.length - this.offset;
    }

    getFirstElemenet() {
        let priorities = Object.keys(this.priorities);
        let firstIndex = this.priorities[priorities[this.offset]];
        return this.elements[firstIndex];
    }

    getLastElement() {
        let priorities = Object.keys(this.priorities);
        let lastIndex = this.priorities[priorities[priorities.length -1 ]];
        return this.elements[lastIndex];
    }

    removeDequeued() {
        if (this.offset * 2 >= this.length()) {
            let priorities = Object.keys(this.priorities),
                els = [],
                prs = {};

            for (let i = this.offset; i < this.elements.length; i++) {
                els.push(this.elements[this.priorities[priorities[i]]]);
                prs[priorities[i]] = els.length - 1;           
            }
            
            this.priorities = prs;
            this.elements = els;
            this.offset = 0;
        }
    }

    enqueue(el, p) {
        if (p < 1) {
            throw new Error('element priority should be bigger than 0');
        }
        if (this.priorities[p] === undefined) {
            this.elements.push(el);
            this.priorities[p] = this.elements.length - 1;
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            let first = this.getFirstElemenet();
            this.offset++;
            this.removeDequeued();
            return first;
        }
        return null;
    }

    front() {
        return !this.isEmpty() ? this.getFirstElemenet() : null;
    }

    back() {
        return !this.isEmpty() ? this.getLastElement() : null;
    }

 
}

module.exports = PriorityQueue;