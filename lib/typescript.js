"use strict";
var typeScript = require("typestring");
var Promise = require("bluebird");
function compile(source) {
    return new Promise(function (resolve) {
        return resolve(typeScript.compile(source));
    }).catch(function (error) {
            throw new Error("this is not typescript code");
        });
}
module.exports.compile = compile;