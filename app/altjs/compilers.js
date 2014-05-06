"use strict";
var compilers = [
    require("../../lib/coffee-script"),
    require("../../lib/es6"),
    require("../../lib/typescript")
];
var Promise = require("bluebird");
function compile(source) {
    var compilePromises = compilers.map(function (compiler) {
        return compiler.compile(source);
    });
    return Promise.any(compilePromises);
}
module.exports.compile = compile;