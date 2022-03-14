const chai = require('chai');
const { describe, it } = require('mocha');

const expect = chai.expect;
const calculator = require('../src/index');

describe('calculator', () =>
{
    const sum = calculator(2,3,'+');
    const sub = calculator(5,3,'-');
    const multiply = calculator(2,3,'*');
    const divide = calculator(9,3, '/');
    const error = calculator(-9812,3, '.');

    describe('addition', () =>
    {
        it('a + b', () =>
        {
            expect(sum).to.equal(5)
        });
        it('returns a number', () =>
        {
            expect(sum).to.be.a('number')
        });

    });

    describe('subtraction', () =>
    {
        it('a - b', () =>
        {
            expect(sub).to.equal(2);
        });
        it('returns a number', () =>
        {
            expect(sub).to.be.a('number')
        });

    });

    describe('multiplication', () =>
    {
        it('a * b', () =>
        {
            expect(multiply).to.equal(6);
        });
        it('returns a number', () =>
        {
            expect(multiply).to.be.a('number')
        });
    });

    describe('division', () =>
    {
        it('a / b', () =>
        {
            // expect(divide).to.equal(8);
            expect(divide).to.equal(3);
        });
        it('returns a number', () =>
        {
            expect(divide).to.be.a('number')
        });
    });

    describe('error', () =>
    {
        it('a / b', () =>
        {
            expect(error).to.equal('xXxXx Err0r - 404');
        });
        it('returns a string', () =>
        {
            expect(error).to.be.a('string')
        });
    });
});
