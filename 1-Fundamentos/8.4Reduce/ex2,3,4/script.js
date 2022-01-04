/* Para os exercícios 2, 3 e 4 considere o seguinte array:
Copiar */
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
/* 2 - Crie uma string com os nomes de todas as pessoas autoras.
Copiar */
/* const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
 */
function reduceNames() {
  // escreva seu código aqui
  const names = books.reduce((objAc, obj, index) =>   {
      if (index === 0) return obj.author.name ;
        return  objAc  + ' , ' + obj.author.name;
      
    },'');
  return names
}
console.log(reduceNames()) 

/*  
function reduceNames() {
    const names = books.reduce((acc, book, index, array) => {
      if (index === array.length - 1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name},`;
    }, '');
    return names;
  }
  console.log(reduceNames()) */

/* 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
Copiar
const expectedResult = 43;
 */
function averageAge() {
  // escreva seu código aqui
  let length;
  const average = books.reduce((objAC, obj, index, array)=>{
    length = array.length;
    return  objAC + (obj.releaseYear - obj.author.birthYear);
  },0)
  return average/length

}
 console.log(averageAge()) 



/* 4 - Encontre o livro com o maior nome.
Copiar

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};
 */
function longestNamedBook() {
  // escreva seu código aqui
  
    const maiorNome = books.reduce((objAC, obj)=>{
        if (objAC.name.length > obj.name.length) return objAC;
        return obj;
    })
    return maiorNome.name

}
console.log(longestNamedBook())
