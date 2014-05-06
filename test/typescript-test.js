"use strict";
var fs = require("fs");
var assert = require("power-assert");
var shouldFulfilled = require("promise-test-helper").shouldFulfilled;
var shouldRejected = require("promise-test-helper").shouldRejected;
var typeScript = require("../lib/typescript.js");
describe("typescript", function () {
    it("should compile typescript code", function () {
        var code = fs.readFileSync(__dirname + "/fixtures/typescript.ts", "utf-8");
        return shouldFulfilled(typeScript.compile(code)).then(function (js) {
            assert(js != null);
        });
    });
    it("should complain error to not compilable code", function () {
        var code = "bad++ code--- () is bad (-=)";
        return shouldRejected(typeScript.compile(code)).catch(function (error) {
            assert(error instanceof Error);
        });
    });
});