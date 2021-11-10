/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . */
let a='trybe';;
let b='be';
let palavraA=a.split('').reverse();
let palavraB=b.split('').reverse();
let retorno;
let negativo=0;

function comparacaoFinalPalavras(palavra1,palavra2){
    
    for(let i=0; i<(palavra2.length-1) ;i++){
        if(palavra2[i]!==palavra1[i]){
            negativo+=1;
        }
    }
    if(negativo>0){
        retorno=false;
    }else{
        retorno=true;
    }
    return retorno;
}
console.log(palavraB);
console.log(palavraA);
console.log(comparacaoFinalPalavras(palavraA,palavraB));



