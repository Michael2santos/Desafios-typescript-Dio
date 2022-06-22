let valorAny: any;
valorAny = 3;
valorAny = 'Ola, Mundo!!!'
valorAny = true;

let valorString1: string = 'testando tipo Any ';
//valorString1 = valorAny;
let valorString2 = 'com typescript';
//valorString2 = valorAny; 

function somarString(string1: string, string2: string){
    console.log(string1 + string2);
}

somarString(valorString1, valorString2);