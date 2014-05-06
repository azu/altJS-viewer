"use strict";
var CoffeeScript = require("coffee-script-redux");
var Promise = require("bluebird");
function compile(source) {
    return new Promise(function (resolve) {
        return resolve(CoffeeScript.cs2js(source));
    });
}
module.exports.compile = compile;