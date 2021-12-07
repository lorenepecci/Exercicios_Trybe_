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

/* BONUS
  Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const somaEstudantesMatematica =  (allLessons) => {
    const lista=Object.keys(allLessons);
    let count=0
    for(let i in lista){
        if(allLessons[lista[i]].materia === 'Matemática'){
            count +=1;
        }
    }
    return console.log(count);
    
}
somaEstudantesMatematica(allLessons);

function aulasProfessor(nomeProf ) {

}