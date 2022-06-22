function somaNumber(numero3: number , numero4: number){
    return numero3 + numero4;
}

console.log(somaNumber(1,6));

function printaValores(numero1: number, numero2: number): void{//function que não retorna nenhum valor se usa metodo void
    console.log(numero1 + numero2);
}

//callback uma função passada como parametro, vai rodar se alguma ação acontecer
//callback:(numero3: number, numero4: number) => number