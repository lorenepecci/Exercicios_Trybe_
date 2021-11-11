/* 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. */

let n_;
let n;
let sum=0;
let iconV=0;
let iconX=0;
let iconL=0;
let iconC=0;
let iconD=0;

function algoritimoRomano(numero){
    n_= numero;
    n= n_.split('');
    nReverso=n.reverse();
    console.log(nReverso);
    for (let num of nReverso){
        if(num=='D' ){
            sum+=500;
            iconD+=1;
        }
        if(num=='C' ){
            iconC+=1;
            if(iconD==0){
                sum+=100;
            }else{
                sum-=100;
            }
        }
        if(num=='L' ){
            sum+=50;
            iconL+=1;
        }
        if(num=='V'){
            sum+=5;
            iconV+=1;
        }else if(num=='X' ){
            iconX+=1;
            if(iconL==0 && iconC==0){
                sum+=10;
            }else{
                sum-=10;
            }
        }else if(num=='I'){
            if(iconX==0 && iconV==0 && iconL==0){
                sum+=1;
            }else{
                sum-=1;
            }
        }
    }
    return sum;
}

console.log(algoritimoRomano('CD'));