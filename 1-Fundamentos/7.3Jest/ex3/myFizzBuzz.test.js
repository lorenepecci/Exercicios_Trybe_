/* 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
 */


const myFizzBuzz = require('./myFizzBuzz');

describe('Teste na função FizzBuzz ', () => {
    it('número divisível por 3 e 5 retorno de fizzbuzz', () =>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('número divisível por 3 fizz', () =>{
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('número divisível por 5 retorno de buzz', () =>{
        expect(myFizzBuzz(20)).toBe('buzz');
    });
    it('número divisível nem por 5 nem por 3', () =>{
        expect(myFizzBuzz(2)).toBe(2);
    });
    it('Entrada que nao é numero', () =>{
        expect(myFizzBuzz('a')).toBe(false);
    });
});