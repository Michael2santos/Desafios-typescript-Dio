"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Ola, Mundo!!!';
valorAny = true;
let valorString1 = 'testando tipo Any ';
//valorString1 = valorAny;
let valorString2 = 'com typescript';
//valorString2 = valorAny; 
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString1, valorString2);
