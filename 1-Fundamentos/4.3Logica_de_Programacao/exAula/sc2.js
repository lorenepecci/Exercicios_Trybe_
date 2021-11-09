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