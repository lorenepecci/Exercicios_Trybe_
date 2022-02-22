/* 
const transformandoData = (dia, mes, ano, ...outros) => `${dia}/${mes}/${ano} vc ganhou os numeros da mega:  ${outros}`

/* console.log(transformandoData(21,11,1997,30,40,50,60)) */


          
/* const numbers = [3, 12, 1, 21, 23];
const foundElements = numbers.filter(e => e > 10);
console.log(foundElements);
 
 */
/* const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2
    },
    {
      name: 'phone',
      price: 500,
      id: 1
    }
  ];
  
  console.log(products.sort((a,b) => b.price - a.price));
  
         */


          
const cart = [
    {
      name: "laptop",
      price: 1000,
      quantity: 2,
      id: 3,
    },
    {
      name: "desktop",
      price: 1500,
      quantity: 1,
      id: 2,
    },
    {
      name: "phone",
      price: 500,
      quantity: 3,
      id: 1,
    },
  ];
  
  // escreva seu código aqui
  
  
            

/*             
const valorInicial = 0;
const totalCart = cart.reduce((accumulator,product) => accumulator + product.price * product.quantity, valorInicial);
 */
   


   /*        
          
const newBook = (title, author, price, discount) => ({
            
    title: title,
    author: author,
    finalPrice: price - discount
    
});
console.log(newBook) 
          
 */
/* const books = [
  {
    id:1,
    name: 'um',
  },
  {
    id:2,
    name: 'dois',
  },
  {
    id:3,
    name: 'tres',
  }
]

const func = ( lista, ...args) => {
   const resp = lista.map((obj) => {
     let {id , name } = obj;
     if(args.includes(id)) return name;
  })
  return resp;
 } */
/* console.log(func(books,1,2,3)) */
const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
data = {
species: [
  {
    id: lionId,
    name: 'lions',
    popularity: 4,
    location: 'NE',
    availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
    residents: [
      {
        name: 'Zena',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Maxwell',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Faustino',
        sex: 'male',
        age: 7,
      },
      {
        name: 'Dee',
        sex: 'female',
        age: 14,
      },
    ],
  },
  {
    id: tigersId,
    name: 'tigers',
    popularity: 5,
    location: 'NW',
    availability: ['Wednesday', 'Friday', 'Saturday', 'Tuesday'],
    residents: [
      {
        name: 'Shu',
        sex: 'female',
        age: 19,
      },
      {
        name: 'Esther',
        sex: 'female',
        age: 17,
      },
    ],
  },
  {
    id: bearsId,
    name: 'bears',
    popularity: 5,
    location: 'NW',
    availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
    residents: [
      {
        name: 'Hiram',
        sex: 'male',
        age: 4,
      },
      {
        name: 'Edwardo',
        sex: 'male',
        age: 4,
      },
      {
        name: 'Milan',
        sex: 'male',
        age: 4,
      },
    ],
  },
  {
    id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
    name: 'penguins',
    popularity: 4,
    location: 'SE',
    availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
    residents: [
      {
        name: 'Joe',
        sex: 'male',
        age: 10,
      },
      {
        name: 'Tad',
        sex: 'male',
        age: 12,
      },
      {
        name: 'Keri',
        sex: 'female',
        age: 2,
      },
      {
        name: 'Nicholas',
        sex: 'male',
        age: 2,
      },
    ],
  },
  {
    id: ottersId,
    name: 'otters',
    popularity: 4,
    location: 'SE',
    availability: ['Friday', 'Thursday', 'Wednesday', 'Saturday'],
    residents: [
      {
        name: 'Neville',
        sex: 'male',
        age: 9,
      },
      {
        name: 'Lloyd',
        sex: 'male',
        age: 8,
      },
      {
        name: 'Mercedes',
        sex: 'female',
        age: 9,
      },
      {
        name: 'Margherita',
        sex: 'female',
        age: 10,
      },
    ],
  },
  {
    id: frogsId,
    name: 'frogs',
    popularity: 2,
    location: 'SW',
    availability: ['Saturday', 'Friday', 'Thursday', 'Wednesday'],
    residents: [
      {
        name: 'Cathey',
        sex: 'female',
        age: 3,
      },
      {
        name: 'Annice',
        sex: 'female',
        age: 2,
      },
    ],
  },
  {
    id: snakesId,
    name: 'snakes',
    popularity: 3,
    location: 'SW',
    availability: ['Sunday', 'Saturday', 'Friday', 'Thursday'],
    residents: [
      {
        name: 'Paulette',
        sex: 'female',
        age: 5,
      },
      {
        name: 'Bill',
        sex: 'male',
        age: 6,
      },
    ],
  },
  {
    id: elephantsId,
    name: 'elephants',
    popularity: 5,
    location: 'NW',
    availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
    residents: [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ],
  },
  {
    id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
    name: 'giraffes',
    popularity: 4,
    location: 'NE',
    availability: ['Wednesday', 'Thursday', 'Tuesday', 'Friday'],
    residents: [
      {
        name: 'Gracia',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Antone',
        sex: 'male',
        age: 9,
      },
      {
        name: 'Vicky',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Clay',
        sex: 'male',
        age: 4,
      },
      {
        name: 'Arron',
        sex: 'male',
        age: 7,
      },
      {
        name: 'Bernard',
        sex: 'male',
        age: 6,
      },
    ],
  },
],
}
/* const expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6,
    }; */

function countAnimals(objPedido) {
  if (!objPedido) {
    const objetoVazio ={};
    const listAcumulada =[];
    data.species.forEach((specie) => {
      let obj = {[[specie.name]]: specie.residents.length};
      list.push(obj)
    });
    Object.assign(objetoVazio,...listAcumulada)
    return objetoVazio;
  }
  const animal = objPedido.specie;
  if (!objPedido.sex) {
    return species.find((item) => item.name === animal).residents.length;
  }
  const sexx = objPedido.sex;
  return species
    .find((item) => item.name === animal)
    .residents.filter((item2) => item2.sex === sexx).length;
}
console.log(countAnimals())
