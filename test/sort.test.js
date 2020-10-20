const expect = require("chai").expect;
const sort = require("../sort");

describe("sort function", () => {
  it("should return in ascending order", () => {
    expect(sort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  });
  it("should be an array", () => {
    expect(sort([1, 3, 5])).a("array");
  });
});
