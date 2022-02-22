const { it } = require("@jest/globals");

/* 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
Copiar */
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('teste da função uppercase', (done)=>{
  uppercase('testlorene', (str) => {
    try {
      expect(str).toBe('TESTLORENE');
      done();

    } catch (error) {
      done(error);
    }
  });
});