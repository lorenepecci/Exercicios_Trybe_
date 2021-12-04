/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
Copie o código abaixo. */

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  }
/* 
  testingScope(true); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortOdd = (list) => {
    const sorted = list.sort((a, b) => a - b);
    return sorted;
};

sortOdd(oddsAndEvens)
console.log(oddsAndEvens); // será necessário alterar essa linha 😉