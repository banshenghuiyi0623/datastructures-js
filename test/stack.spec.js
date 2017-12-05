let expect = require('chai').expect,
    Stack = require('../lib/stack');

describe('stack tests', () => {

    let stack = new Stack();

    describe('.push(el)', () => {
        it('should push 3 elements to the stack', () => {
            stack.push(5);
            stack.push(7);
            stack.push(12);
        });
    });

    describe('.length()', () => {
        it('should have length of 3', () => {
            expect(stack.length()).to.equal(3);
        });
    });

    describe('.peek()', () => {
        it('should peek the top element', () => {
            expect(stack.peek()).to.equal(12);
        });
    });

    describe('.isEmpty()', () => {
        it('should not be empty', () => {
            expect(stack.isEmpty()).to.equal(false);
        });
    });

    describe('.pop()', () => {
        it('should pop all elements from the stack', () => {
            expect(stack.pop()).to.be.equal(12);
            expect(stack.pop()).to.be.equal(7);
            expect(stack.pop()).to.be.equal(5);
            expect(stack.pop()).to.be.equal(null);
            expect(stack.length()).to.be.equal(0);
            expect(stack.isEmpty()).to.be.equal(true);
            expect(stack.peek()).to.be.equal(null);
        });
    });

});