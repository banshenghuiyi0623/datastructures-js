'use strict';

class Set {

    constructor() {
        this.elements = {};
        this.count = 0;
    }

    add(el) {
        if (!this.elements[el]) {
            this.elements[el] = true;
            this.count++;
        }
    }

    remove(el){ 
        if (this.elements[el]) {
            this.elements[el] = false;
            this.count--;
        }
    }

    isEmpty() {
        return this.count === 0 ? true : false;
    }

    size() {
        return this.count;
    }

    contains(el) {
        return this.elements[el] === true ? true : false;
    }

    union(s) {
        let union = new Set();
        for (let e1 in this.elements) {
            if (this.contains(e1)) {
                union.add(e1);
            }
        }
        for (let e2 of s.getElements()) {
            union.add(e2);
        }
        return union;
    }

    intersect(s) {
        let intersect = new Set();
        for (let el in this.elements) {
            if (this.contains(el) && s.contains(el)) {
                intersect.add(el);
            }
        }
        return intersect;
    }

    difference(s) {
        let diff = new Set();
        for (let el in this.elements) {
            if (this.contains(el) && !s.contains(el)) {
                diff.add(el);
            }  
        }
        return diff;  
    }

    isSubset(s) {
        if (s.size() <= this.count) {
            for (let el of s.getElements()) {
                if (!this.contains(el)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    getElements() {
        let elements = [];
        for (let el in this.elements) {
            if (this.contains(el)) {
                elements.push(!isNaN(el) ? Number(el) : el);
            }
        }
        return elements;
    }

}

module.exports = Set;