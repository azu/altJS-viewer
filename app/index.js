var CodeMirror = require("codemirror");
var compiler = require("./altjs/compilers");
var inputTextArea = document.querySelector(".input");
var outputTextArea = document.querySelector(".output");
var inputEditor = CodeMirror.fromTextArea(inputTextArea, {
    mode: "javascript",
    lineNumbers: true
});
var outputEditor = CodeMirror.fromTextArea(outputTextArea, {
    mode: "javascript",
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