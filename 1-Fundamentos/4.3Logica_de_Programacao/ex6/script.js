/*6-Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.*/

let n= 23;
let resto; 
let listaDivisiveis=0;
let pares;

for (i=2; i<n; i++){
    resto= n%i;
    if(resto==0){
        listaDivisiveis+=1;//a maioria dos numeros terá esse valor grande pois varios se dividem com resto igual a zero.
    }
}

if (listaDivisiveis==0){
    console.log("seu numero é primo");

}else{
    console.log("seu numero não é primo");

}