/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

let valor=[2, 3, 6, 7, 10, 1];
let maior=0;
let maiorIndex;
function IndexMaiorValor(num){
    for (let n of num){
        if(n>maior){
            maior=n;   
        }
    }
    maiorIndex=num.indexOf(maior); 
    return maiorIndex;
}

console.log(IndexMaiorValor(valor));