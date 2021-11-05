/*Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

const a1=-98;
const a2=30;
const a3=60;

let soma= a1+a2+a3;

if(soma>=180 || a1<0 || a2<0 || a3<0){
    console.log("invalido");
}else{
    console.log("valido");
}