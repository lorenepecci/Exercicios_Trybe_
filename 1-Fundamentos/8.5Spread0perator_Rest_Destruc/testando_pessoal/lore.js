var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
/* { vegetarian: 2, standard: 1, vegan: 1 } */
mealNames =['vegetarian', 'standard', 'vegan']
function alimetacao(list) {
  let count=0;
  let lista =[];
  let lorene ={};
  mealNames.forEach((meal) => {
    list.forEach((obj) => {
      if(obj.meal === meal) {
        count+=1
      }
      let objeto = {[[meal]]:count};
      lista.push(objeto);
    })
    count=0;
    Object.assign(lorene,...lista)
    
  });
  return lorene;
}
console.log(alimetacao(list1));