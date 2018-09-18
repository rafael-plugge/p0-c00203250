var path = require("path");
var expect = require("chai").expect;

var xor_21 = require(path.join(__dirname, "..", "./xor_21.js"));

describe("xor_21()", function ()
{
    "use strict";

    it("exists", function ()
    {
        expect(xor_21).to.be.a("function");
    });

    it("compute the xor 21 of 0", function ()
    {
        expect(xor_21(0)).to.equal(21);
    });

    it("compute the xor 21 of -5", function ()
    {
        expect(xor_21(-5)).to.equal(-18);
    });

    it("compute the xor 21 of 21", function ()
    {
        expect(xor_21(21)).to.equal(0);
    });

    it("compute the xor 21 of 42", function ()
    {
        expect(xor_21(42)).to.equal(63);
    });
});
