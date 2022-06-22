"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora',
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora',
};
const paula = {
    nome: 'Paula',
    idade: 26,
    profissao: 'Desenvolvedora',
};
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["Jogadora"] = 3] = "Jogadora";
})(profissao || (profissao = {}));
const Michael = {
    nome: 'Michael',
    idade: 23,
    Profissao: profissao.Desenvolvedora,
};
const Natalie = {
    nome: 'Natalie',
    idade: 23,
    Profissao: profissao.Professora,
};
const Max = {
    nome: 'Max',
    idade: 20,
    Profissao: profissao.Jogadora,
    materias: ['Matemática', 'programação'],
};
const Antonio = {
    nome: 'Antonio',
    idade: 40,
    materias: ['portugues', 'ingles']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(Antonio.materias);
//tipo de variavel any
