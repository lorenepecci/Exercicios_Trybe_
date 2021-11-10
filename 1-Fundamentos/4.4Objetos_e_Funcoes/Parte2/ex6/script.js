/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. */

let inteiro=5;
let soma=0;

function somatorioInteiros(num){
    for(let i=num+1; i>=1; i-=1 ){
        let numN=i-1;
        soma+=numN;
    }

    return soma;
}

console.log(somatorioInteiros(inteiro))