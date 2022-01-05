/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest .
Copiar */
// escreva sum abaixo

const func = (...args) => `${args.reduce((ac, a) => ac + a)}`

console.log(func(2,2))
