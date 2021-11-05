/*Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

const a=1;
const b=10;
const c=100;
let resposta;

if(a>=b && a>=c){
    resposta=a;
}else if(b>=a && b>=c){
    resposta=b;
}else{
    resposta=c;
}

console.log("O maior é:", resposta)