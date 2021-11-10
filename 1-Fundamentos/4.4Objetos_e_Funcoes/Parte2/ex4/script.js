/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */
let nome;
let maior=0;
let nomes=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function nomeMaisCumprido(nomes){
    for(let i in nomes){
        nome=nomes[i].split()// cria um vetor pra cada nome
        /* console.log(quant) */
        for (let j in nome[0]){//pega o vetor em 0 , e conta as letras
            num=Math.max(j)+1;
            if(num>maior){
                maior=Math.max(num);
            } 
        }
    }
    return maior;
}
console.log(nomeMaisCumprido(nomes))