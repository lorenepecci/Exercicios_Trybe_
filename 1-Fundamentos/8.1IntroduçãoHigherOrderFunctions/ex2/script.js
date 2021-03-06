/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const resultadoSorteio = (numApostado, number) => number === numApostado;

const sorteioNum = (numApostado, callback) => {
    const num = parseInt((Math.random() * 5) + 1);
    console.log(num)
    return callback(numApostado, num) ? 'Parabéns' : 'Tente novamente.';
} 

console.log(sorteioNum(5, resultadoSorteio)); 
