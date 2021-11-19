const chai = require('chai');
const expect = chai.expect;

const evenInArray = require('../src/evenInArray');

describe('EvenInArray', ()=>{
    describe('EvenInArray',()=>{
        it('Pares en array',()=>{
            expect(evenInArray.evenInArray([1,2,3,4])).to.equal("NO");
            expect(evenInArray.evenInArray([2,4,6,8])).to.equal("SI");
            expect(evenInArray.evenInArray([10,12,14,16])).to.equal("SI");
            expect(evenInArray.evenInArray([10,50,31,44])).to.equal("NO");
            expect(evenInArray.evenInArray([120,200,2,4])).to.equal("SI");
            expect(evenInArray.evenInArray([10,20,30,43])).to.equal("NO");
        });
    });
});