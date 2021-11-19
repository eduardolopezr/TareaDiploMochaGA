const chai = require("chai");
const expect = chai.expect;

const toUpper = require("../src//toUpper");

describe("ToUpper",()=>{
    describe("Palabra",()=>{
        it("Minusculas a mayúsculas",()=>{
            expect(toUpper.toUpper("lalo")).to.equal("LALO");
            expect(toUpper.toUpper("nodejs")).to.equal("NODEJS");
            expect(toUpper.toUpper("mocha")).to.equal("MOCHA");
            expect(toUpper.toUpper("chai")).to.equal("CHAI");
            expect(toUpper.toUpper("chanchito")).to.equal("CHANCHITO");
            expect(toUpper.toUpper("hey")).to.equal("HEY");

        });
    });
});