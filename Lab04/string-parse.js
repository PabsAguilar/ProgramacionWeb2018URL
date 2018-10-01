'use strict';
var fs = require('fs');

if (!process.argv[2]) {
    console.log("Debe de enviar como parametro, el archivo a parsear.");
} else {
    let fileName = process.argv[2].toString();

    var array = fs.readFileSync(fileName).toString().split("\n");
    let content = "";
    for (let i in array) {
        console.log(array[i]);
        content = content + array[i];
    }



    if (parenthesesAreBalanced(content)) {
        console.log("Success");

    } else {
        console.log("ParseError");
    }
}


function parenthesesAreBalanced(string) {
    var parentheses = "[]{}()",
        stack = [],
        i, character, bracePosition;

    for (i = 0; character = string[i]; i++) {
        bracePosition = parentheses.indexOf(character);

        if (bracePosition === -1) {
            continue;
        }

        if (bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        } else {
            if (stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
}