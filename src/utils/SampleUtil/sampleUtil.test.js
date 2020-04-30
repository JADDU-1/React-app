import {add} from "./sample"
describe("add tests",()=>{
    it("should return sum of two numbers",()=>{
    expect(add(1,2)).toBe(3);
    })
})