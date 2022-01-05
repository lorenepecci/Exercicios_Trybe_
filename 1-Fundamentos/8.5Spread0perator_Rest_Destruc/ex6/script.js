/* 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
Dica: use array destructuring e abbreviation object literal .
Copiar */
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const listas = [palio, shelbyCobra, chiron]
// escreva toObject abaixo
const toObject = (lista) => {
    const [a,b,c] = lista;
    return {nome: a, marca:b, ano:c}
}

const object2 = ([nome, marca, ano]) => ({nome, marca, ano})

console.log(toObject(palio))
console.log(object2(palio))