/*Fazer o sort crescente e decrescente usando for */ 
let lista= [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let lista_decrescente=[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];



for(let k=0; k<9; k++){
    for(let i=0 ; i<lista.length; i=i+1){
        anterior1=lista[i]; 
        posterior1=lista[i+1]; 
        if (anterior1>posterior1){
            lista[i]=posterior1;
            lista[i+1]=anterior1;
        } 
    }
}

console.log(lista);


for(let k=0; k<9; k++){
    for(let i=9; i>=0 ; i=i-1){
        ultimo=lista_decrescente[i]; 
        primeiro=lista_decrescente[i-1]; 
        if (ultimo>primeiro){
            lista_decrescente[i]=primeiro;
            lista_decrescente[i-1]=ultimo;
        } 
    }
}

console.log(lista_decrescente);