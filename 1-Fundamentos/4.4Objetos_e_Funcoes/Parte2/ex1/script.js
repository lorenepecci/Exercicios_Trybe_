/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

let retorno;
let nomeMiddle=0;
function serPalindromo(nome){
    nomeMiddle= (nome.length)/2;
    for(let i=1; i<nomeMiddle; i+=1){
        for(let j=nome.length; j>(nomeMiddle+1); j-=1){
            if(nome[i]===nome[j]){
                retorno=true;
            }else{
                retorno=false;
            }
        }
    }
    return retorno;
}

console.log(serPalindromo("arara"),serPalindromo("desenvolvimento"));
