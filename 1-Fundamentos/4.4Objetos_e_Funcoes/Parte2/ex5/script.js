/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

let lista=[2, 3, 2, 5, 8, 2, 3];
let numeroMaisRepetido=0;
let count=0;

function maisRepetido(list){
    for(let i of list){
        for(let j of list){
            if(i===j){
                count+=1;
            }
        }
        countDoI=count;
        if(numeroMaisRepetido<countDoI){
            numeroMaisRepetido=countDoI;
        }
        
    }
    return numeroMaisRepetido;
}

console.log(maisRepetido(lista))