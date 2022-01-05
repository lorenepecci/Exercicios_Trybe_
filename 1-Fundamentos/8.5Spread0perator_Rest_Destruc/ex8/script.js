/* 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
Dica: use default params .
Copiar */
// escreva greet abaixo
const greet = (...args) => args.reduce((ac, a )=> a+' '+ac)

const greet2 = (arg1 , arg2 ='Hi') => `${arg2} ${arg1}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

console.log(greet2('John')) // 'Hi John'
console.log(greet2('John', 'Good morning')) // 'Good morning John'
console.log(greet2('Isabela', 'Oi')) // 'Oi Isabela'