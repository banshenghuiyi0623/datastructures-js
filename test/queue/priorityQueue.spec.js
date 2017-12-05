var expect = require('chai').expect,
    PriorityQueue = require('../../lib/queue/priorityQueue');

describe('priorityQueue test', function() {

    'use strict';

    var priorityQueue = new PriorityQueue();

    describe('enqueue(el, priority)', () => {
        it('should queue elements with priorities', function() {
            priorityQueue.enqueue('john', 2);
            priorityQueue.enqueue('sam', 4);
            priorityQueue.enqueue('samantha', 1);
            priorityQueue.enqueue('rose', 7);
        });
    });

    describe('.length()', () => {
        it('should have length of 4', () => {
            expect(priorityQueue.length()).to.equal(4);
        });
    });

    describe('.front()', () => {
        it('should get the front element', () => {
            expect(priorityQueue.front()).to.equal('samantha');
        });
    });

    describe('.back()', () => {
        it('should get the back element', () => {
            expect(priorityQueue.back()).to.equal('rose');
        });
    });

    describe('.dequeue()', () => {
        it('should dequeue elements by priority', () => {
            expect(priorityQueue.dequeue()).to.equal('samantha');
            expect(priorityQueue.length()).to.equal(3);
            expect(priorityQueue.front()).to.equal('john');

            expect(priorityQueue.dequeue()).to.equal('john');
            expect(priorityQueue.length()).to.equal(2);
            expect(priorityQueue.front()).to.equal('sam');  

            expect(priorityQueue.dequeue()).to.equal('sam');
            expect(priorityQueue.length()).to.equal(1);
            expect(priorityQueue.front()).to.equal('rose');         
        });
    });
});