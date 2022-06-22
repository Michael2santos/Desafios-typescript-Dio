"use strict";
//Any e Unknown
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTeste = 'verificando';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'teste string';
unknownValor = true;
unknownValor = 'testando tipo unknown';
let frase1 = 'teste feito com sucesso';
//frase1 = unknownValor; //erro de atribuição por causa do tipo
if (typeof unknownValor === 'string') { //para unknown ser atribuido tem que ser valido o tipo antes, exemplo acima deu erro pois não foi validado o tipo antes da atribuição
    frase1 = unknownValor;
}
//throw
function testeError(erro, codigo) {
    throw { error: erro, code: codigo };
}
testeError('Erro de carregamento', 500);
