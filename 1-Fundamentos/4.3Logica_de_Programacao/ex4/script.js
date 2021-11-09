/*4- Depois, faça uma pirâmide com n asteriscos de base:*/

/* let resto = 5%2;
let conta= (5-resto)/2;
A conta é o valor de n menos o resto dividido por 2 ) serve para saber o valor de linhas intermediarias, que é igual a "conta" -1 . A altura do triangulo é ("linhas intermediarias" +2) é 3 pra gente;*/

let n= 5;
let resto = (n%2);
let linhasIntermediarias =((n-resto)/2)-1;
let linhas_totais= 2+linhasIntermediarias;
let s="*";
let e="-";
let espaco1;
let espaco2;
let r=0;

for(let i=1; i<=linhas_totais; i++){
    if(i==1){
        espaco1=e.repeat(((n-1)/2));
        valor = s.repeat(1);
        espaco2=e.repeat(((n-1)/2));
     
    }else if(i==linhas_totais){
        valor = s.repeat(n);
    }else{
        espaco1=e.repeat(((n-1)/2)-r);
        valor = s.repeat((i*2)-1);
        espaco2=e.repeat(((n-1)/2)-r);
    }
    console.log(espaco1+valor+espaco2);
    espaco1="";
    espaco2="";
    r+=1;
}

/* for(let i=1; i<=linhas_totais; i++){
    var valor = `${i}`; 
    switch (i) {
        case 1:
            espaco1=e.repeat(2);
            valor = s.repeat(1);
            espaco2=e.repeat(2);
            break;
        case 2:
            espaco1=e.repeat(1);
            valor = s.repeat(3);
            espaco2=e.repeat(1);
            break;
        case 3:
            espaco1=e.repeat(0);
            valor = s.repeat(5);
            espaco2=e.repeat(0);
            break;      
    }
    console.log(espaco1+valor+espaco2);
}

 */
