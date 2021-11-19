const chai = require('chai');
const expect = chai.expect;

const stringLength = require('../src/stringLength');

describe('StringLength', ()=>{
    describe('StringLength',()=>{
        it('Longitud en un string',()=>{
            expect(stringLength.stringLength("Hola")).to.equal(4);
            expect(stringLength.stringLength("Mocha&Chai")).to.equal(10);
            expect(stringLength.stringLength(">:(")).to.equal(3);
            expect(stringLength.stringLength("ChanchitoFeliz")).to.equal(14);
            expect(stringLength.stringLength("No")).to.equal(2);
            expect(stringLength.stringLength("1")).to.equal(1);
        });
    });
});