var CodeMirror = require("codemirror");
require('codemirror/mode/javascript/javascript');
var compiler = require("./altjs/compilers");
var inputTextArea = document.querySelector(".input");
var outputTextArea = document.querySelector(".output");
var inputEditor = CodeMirror.fromTextArea(inputTextArea, {
    lineNumbers: true
});
var outputEditor = CodeMirror.fromTextArea(outputTextArea, {
    mode: "javascript",
    styleActiveLine: true,
    matchBrackets: true,
    lineNumbers: true
});
inputEditor.on("change", function (editor) {
    var editingCode = editor.getValue();
    compiler.compile(editingCode).then(function (code) {
        outputEditor.setValue(code);
    }).catch(function(error){
        console.log(error);
    });
});