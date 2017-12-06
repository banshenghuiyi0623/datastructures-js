let expect = require('chai').expect,
    LinkedListNode = require('../../lib/linkedList/linkedListNode'),
    LinkedList = require('../../lib/linkedList/linkedList');

describe('linkedList tests', function() {

    let linkedList = new LinkedList();

    describe('.addFirst(value)', () => {
        it('should add a node at the beginning of the list', () => {
            linkedList.addFirst('test 1');
            linkedList.addFirst('test 2');
        });
    });

    describe('.addLast(value)', () => {
        it('should add a node to the end of the list', () => {
            linkedList.addLast('test 3');
            linkedList.addLast('test 4');
        });
    });

    describe('.addAfter(value, newValue)', () => {
        it('should add a node after a specific value', () => {
            linkedList.addAfter('test 2', 'test 5');
            linkedList.addAfter('test 3', 'test 6');
        });
    });

    describe('.addBefore(value, newValue)', () => {
        it('should add a node after a specific value', () => {
            linkedList.addBefore('test 5', 'test 7');
            linkedList.addBefore('test 2', 'test 8');
        });
    });

    describe('.length()', () => {
        it('should get the length of the list', () => {
            expect(linkedList.getLength()).to.equal(8);
        });
    });

    describe('.getHead()', () => {
        it('should get the head node', () => {
            expect(linkedList.getHead().getValue()).to.equal('test 8')
        });
    });

    describe('.traverse()', () => {
        it('should traverse the linked list', () => {
            let values = [];
            linkedList.traverse((value) => {
                values.push(value);
            });
            expect(values).to.deep.equal([
                'test 8', 'test 2', 'test 7', 
                'test 5', 'test 1', 'test 3', 
                'test 6', 'test 4'
            ]);
        });
    });

    describe('.find()', () => {
        it('should find a nodes', () => {
            let n = linkedList.find('test 5');
            expect(n).to.be.instanceof(LinkedListNode);
            expect(n.getValue()).to.equal('test 5');
            expect(n.getNext().getValue()).to.equal('test 1');
        });

        it('should return null when a node not found', () => {
            expect(linkedList.find('not found')).to.equal(null);
        });
    });
    
});