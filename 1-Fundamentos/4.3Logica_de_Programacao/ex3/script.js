/*Agora inverta o lado do triângulo do ex2 .*/

let n=5;
let symbol = '*';
let line = '';

for (let i = 5; i > 0; i = i-1) {
    for (let j=0; j<i ; j++){
        line=line+symbol;
    }
    
    console.log(line)
    line='';
};