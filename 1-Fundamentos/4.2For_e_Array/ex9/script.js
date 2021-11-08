/*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .*/
let ar=[];

for (let num=1; num<=25; num++){
    ar.push(num);
}

let ar2=[];
for (let i of ar){
    i=i/2;
    ar2.push(i);
}

console.log(ar2);