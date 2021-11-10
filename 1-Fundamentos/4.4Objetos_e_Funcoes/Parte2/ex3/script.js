/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
 */

let valor= [2, 4, 6, 7, 10, 0, -3];
let menor=valor[1];
let menorIndex;
let Key;
function IndexMenorValor(num){
    /* menor=Math.min(num);
       menorIndex=num.indexOf(menor) ; */
    for (let key in num){
        if(num[key]<menor){
            menor=num[key]; 
            Key=key;  
        }
    }
    menorIndex=Key; 
    return menorIndex;
}

console.log(IndexMenorValor(valor));