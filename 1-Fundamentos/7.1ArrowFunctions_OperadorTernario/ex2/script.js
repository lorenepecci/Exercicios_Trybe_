/* 1- Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
2 -Crie uma função que receba uma frase e retorne qual a maior palavra.
 */

const fatorialDoNum = (num) => {
    let fatorial=num;
    for(let n=num; n>=2; n--){
        let nDepois = n-1;
        fatorial = fatorial*nDepois
    }
    return fatorial;
}
/* 
console.log(fatorialDoNum(5)) */

const maiorPalavra = (palavra) => {
    let lista = palavra.split(' ');
    let maior = 0;
    for (let i of lista) {
        if(i.length > maior){
            maior = i.length;
        };
    }
    return maior;
}
/* console.log(maiorPalavra('oi tudo bem')) */

/* Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".
 */

/* const bot = document.querySelector("button");
const p = document.querySelector("p");
let count=0;
bot.addEventListener("click", () => {
    count+=1
    p.innerHTML = count;
});
const bot2 = document.querySelectorAll("button")[1];
const input = document.querySelector("input");
const h22 = document.querySelector("h2");
bot2.addEventListener("click", () => {
    for(let i of input.value)
        if(i.includes('x')){
            h22.innerHTML += 'Trybe';
        } else {
            h22.innerHTML += i;
        }
});
const bot3 = document.querySelectorAll("button")[2]; 
let array = ['JS','HTML','CSS','DOM','Events']
const h3 = document.querySelector("h3");
bot3.addEventListener("click", (h22) => {
    h3.innerHTML= array[0]+h22.innerHTML; 
    console.log(h3)
})
 */
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));