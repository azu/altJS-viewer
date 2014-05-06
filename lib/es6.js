"use strict";
var es6tr = require("es6-transpiler");
var Promise = require("bluebird");
function compile(source) {
    return new Promise(function (resolve) {
        return resolve(es6tr.run({
            src: source
        }));
    }).then(function (code) {
            if (code.errors.length > 0) {
                throw new Error("this is not es6 code | not compilable code");
            }
            return code.src;
        });
}
module.exports.compile = compile;