"use strict";
var fs = require("fs");
var assert = require("power-assert");
var shouldFulfilled = require("promise-test-helper").shouldFulfilled;
var shouldRejected = require("promise-test-helper").shouldRejected;
var es6 = require("../lib/es6");
describe("es6", function () {
    it("should compile typescript code", function () {
        var code = fs.readFileSync(__dirname + "/fixtures/es6.js", "utf-8");
        return shouldFulfilled(es6.compile(code)).then(function (js) {
            assert(js != null);
        });
    });
    it("should complain error to not compilable code", function () {
        var code = "bad++ code--- () is bad (-=)";
        return shouldRejected(es6.compile(code)).catch(function (error) {
            assert(error instanceof Error);
        });
    });
});