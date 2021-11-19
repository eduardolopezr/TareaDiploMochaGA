const chai = require("chai");
const expect = chai.expect;

const sort = require("../src/sort");

describe("Sort",()=>{
    describe("Array",()=>{
        it("Ordenar Array",()=>{
            expect(sort.sort([3,1,2,4])).to.eql([1,2,3,4]);
            expect(sort.sort([32,12,21,43])).to.eql([12,21,32,43]);
            expect(sort.sort([1000,421,21,3])).to.eql([3,21,421,1000]);
            expect(sort.sort([3400,56,41,33])).to.eql([33,41,56,3400]);
            expect(sort.sort([34,51,991,873])).to.eql([34,51,873,991]);
            expect(sort.sort([123,21,45,55])).to.eql([21,45,55,123]);

        });
    });
});