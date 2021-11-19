const chai = require('chai');
const expect = chai.expect;

const even = require('../src/even');

describe('Even', ()=>{
    describe('Par',()=>{
        it('Par o impar',()=>{
            expect(even.even(20)).to.equal("SI");
            expect(even.even(35)).to.equal("NO");
            expect(even.even(222)).to.equal("SI");
            expect(even.even(3)).to.equal("NO");
            expect(even.even(101)).to.equal("NO");
            expect(even.even(401)).to.equal("NO");
        });
    });
});