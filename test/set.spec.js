var expect = require('chai').expect,
    Set = require('../lib/set');

describe('set tests', () => {

    let s1 = new Set(),
        s2 = new Set();

    describe('.add(el)', () => {
        it('should add elements to the set', function() {
            s1.add(1);
            s1.add(2);
            s1.add(3);
            s1.add(4);
            expect(s1.isEmpty()).to.be.equal(false);
            expect(s2.isEmpty()).to.be.equal(true);
            expect(s1.size()).to.be.equal(4);
            s2.add(3);
            s2.add(4);
            s2.add(5);
            s2.add(6);
            expect(s2.isEmpty()).to.be.equal(false);
            expect(s1.size()).to.be.equal(4);
        });

    });

    describe('.remove(el)', () => {
        it('should remove an element', () => {
            s1.remove(1);
            expect(s1.size()).to.be.equal(3);
            expect(s1.contains(1)).to.be.equal(false);
            expect(s1.contains(2)).to.be.equal(true);
            expect(s1.contains(3)).to.be.equal(true);
            expect(s1.contains(4)).to.be.equal(true);
        });

        it('should not affect the set when removing a non existing element', function() {
            s1.remove(33);
            expect(s1.size()).to.be.equal(3);
        });
    });

    describe('.union(s)', () => {
        it('should union sets', function() {
            let s = s1.union(s2);
            expect(s.size()).to.be.equal(5);
            expect(s.contains(2)).to.be.equal(true);
            expect(s.contains(3)).to.be.equal(true);
            expect(s.contains(4)).to.be.equal(true);
            expect(s.contains(5)).to.be.equal(true);
            expect(s.contains(6)).to.be.equal(true);
        });
    });

    describe('.intersect(s)', () => {
        it('should intersect sets', function() {
            let s = s1.intersect(s2);
            expect(s.size()).to.be.equal(2);
            expect(s.contains(3)).to.be.equal(true);
            expect(s.contains(4)).to.be.equal(true);
        });
    });

    describe('difference(s)', () => {
        it('should difference sets', function() {
            var d1 = s1.difference(s2),
                d2 = s2.difference(s1);

            expect(d1.size()).to.be.equal(1);
            expect(d1.contains(2)).to.be.equal(true);
            expect(d2.size()).to.be.equal(2);
            expect(d2.contains(5)).to.be.equal(true);
            expect(d2.contains(6)).to.be.equal(true);
        });
    });

    describe('.isSubset()', () => {
        it('should check if a set is a subset of another one', function() {
            s1.remove(2);
            expect(s1.isSubset(s2)).to.be.equal(false);
            expect(s2.isSubset(s1)).to.be.equal(true);
            s2.remove(3);
            s2.remove(4);
            expect(s2.isSubset(s1)).to.be.equal(false);
        });
    });

    describe('.getElements()', () => {
        it('should get a copy of the set elements', () => {
            expect(s2.getElements()).to.deep.equal([5, 6]);
        });
    });

});