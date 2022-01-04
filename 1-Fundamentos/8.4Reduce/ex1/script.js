/* 1 - Dada uma matriz, transforme em um array.
Copiar */

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];


function flatten() {
  // escreva seu código aqui
  
  return arrays.reduce((linhaac,linha) => linhaac.concat(linha))
}
console.log(flatten())