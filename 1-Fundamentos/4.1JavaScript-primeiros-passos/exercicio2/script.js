/*Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const num1= 20;
const num2= 30;
let resposta;

if(num1>num2){
    resposta=num1;
}else if(num2>num1){
    resposta=num2;
}else{
    resposta="Nao temos a resposta."
}


console.log("O mair entre eles é:", resposta)