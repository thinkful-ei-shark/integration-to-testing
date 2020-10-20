const divide = require("../index");
const chai = require("chai");
const expect = chai.expect;
//const expect = require('chai').expect;

describe("Divide Function", () => {
  it("should divide positive integers correctly", () => {
    //code here
    expect(divide(8, 4)).to.equal(2);
  });
  it("should throw an error when divided by zero", () => {
    //code here
    expect(() => {
      divide(8, 0);
    }).to.throw();
  });
});
