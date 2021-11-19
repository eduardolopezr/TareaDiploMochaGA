const chai = require("chai");
const expect = chai.expect;

const day = require("../src/day");

describe("Day",()=>{
    describe("Dia",()=>{
        it("Día de la semana",()=>{
            expect(day.day(1)).to.equal("Domingo");
            expect(day.day(2)).to.equal("Lunes");
            expect(day.day(3)).to.equal("Martes");
            expect(day.day(4)).to.equal("Miércoles");
            expect(day.day(5)).to.equal("Jueves");
            expect(day.day(6)).to.equal("Viernes");
        });
    });
});