/* // 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X. */
let sum=0;
for(let i=1; i<=1000 ;i++){
    sum=sum+i;
}
console.log("a soma é:", sum);

​
/* //2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta. */
let cont=0;
let resto;
for(let i=2; i<=150; i++){
    resto=i%3;
    if(resto===0){
        cont+=1;
    }
}

if(cont==50){
    console.log("Mensagem secreta");
}else{
    console.log(cont);
}

/* //3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
​
//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
​ */

