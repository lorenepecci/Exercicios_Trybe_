/*5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:*/

let n= 15;
let resto = (n%2);
let linhasIntermediarias =((n-resto)/2)-1;
let linhas_totais= 2+linhasIntermediarias;
let s="*";
let e="-";
let valor="";
let valor2="";
let espaco1="";
let espaco2="";
let vacuo="";
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
        valor = s.repeat(1);
        vacuo = e.repeat((i*2)-3);
        valor2 = s.repeat(1);
        espaco2=e.repeat(((n-1)/2)-r);
    }
    console.log(espaco1+valor+vacuo+valor2+espaco2);
    espaco1="";
    espaco2="";
    valor="";
    valor2="";
    vacuo="";
    r+=1;
}
