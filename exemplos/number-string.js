"use strict";
function somaValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somaValores(1, 3));
console.log(somaValores('seja bem vindo a nossa empresa ', 'Sr.Michael'));
console.log(somaValores(6, 9));
