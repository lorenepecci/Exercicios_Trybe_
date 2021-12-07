const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

  function addTurno(object, key, value){
      object[key] = value;
  }

  addTurno(lesson2, 'turno', 'noite')
  console.log(lesson2);

  /* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

  function describeKeys(object){
    return Object.keys(object);
  }

  console.log(describeKeys(lesson1));

  /* Crie uma função para mostrar o tamanho de um objeto. */
  const tamObjeto= (object) => describeKeys(object).length;
  console.log(tamObjeto(lesson2))

  /* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
  const valuesObjeto= (object) => Object.values(object);
  console.log(valuesObjeto(lesson2))

  /* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
  console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

/* const createTotalObject= (obj1,obj2,obj3) =>{
    const objCreated= {obj1,obj2,obj3};
    return Object.assign({},objCreated)
}
console.log(createTotalObject(lesson1,lesson2,lesson3)); */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */
const somaEstudantes=  (allLessons) =>{
    const n1 = allLessons['lesson1']['numeroEstudantes'];
    const n2 = allLessons['lesson2']['numeroEstudantes'];
    const n3 = allLessons['lesson3']['numeroEstudantes'];
    const soma= n1+n2+n3;
    return soma;
}
console.log(somaEstudantes(allLessons));

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica' */
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
 */

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

  