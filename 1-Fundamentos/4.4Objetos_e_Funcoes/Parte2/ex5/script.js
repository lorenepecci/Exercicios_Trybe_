/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

        
let lista=[2, 3, 2, 5, 8, 2, 3];

let somaNumber=0;
let soma=0;

function maisRepetido(list){
    for(let n of list){
        
        for(let numbers of list){
            if(n==numbers){
                soma+=1;
            }
        }
        if(somaNumber<soma){
            somaNumber=soma;
            numberGanhador=n;
        }
        soma=0;
    }
    return numberGanhador;
    
}
console.log(maisRepetido(lista))