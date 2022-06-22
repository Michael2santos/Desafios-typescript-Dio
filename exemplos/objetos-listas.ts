const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora',
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora',
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 26,
    profissao:'Desenvolvedora',
}

enum profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora,
}

interface Pessoa {
    nome: string,
    idade: number,
    Profissao?: profissao,
}

interface Estudante extends Pessoa{
    materias: string[]
}

const Michael: Pessoa = {
    nome: 'Michael',
    idade: 23,
    Profissao: profissao.Desenvolvedora,
}

const Natalie: Pessoa = {
    nome: 'Natalie',
    idade: 23,
    Profissao: profissao.Professora,
}

const Max: Estudante = {
    nome:'Max',
    idade: 20,
    Profissao:profissao.Jogadora,
    materias: ['Matemática', 'programação'],

}

const Antonio: Estudante = {
    nome: 'Antonio',
    idade: 40,
    materias: ['portugues', 'ingles']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('-',item)
    }
} 

listar(Antonio.materias);

//tipo de variavel any