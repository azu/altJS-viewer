var fs = require("fs");
var assert = require("power-assert");
var shouldFulfilled = require("promise-test-helper").shouldFulfilled;
var shouldRejected = require("promise-test-helper").shouldRejected;
var coffeeScript = require("../lib/coffee-script");
describe("coffee-script", function () {
    it("should compile coffee-script code", function () {
        var code = fs.readFileSync(__dirname + "/fixtures/coffee-script.coffee", "utf-8");
        return shouldFulfilled(coffeeScript.compile(code)).then(function (js) {
            assert(js != null);
        });
    });
    it("should complain error to not compilable code", function () {
        var code = "bad code () is bad (-=)";
        return shouldRejected(coffeeScript.compile(code)).catch(function (error) {
            assert(error instanceof Error);
        });
    });
});