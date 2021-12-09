
/* First-Class Functions */
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

/* high order functions */
/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log); */

  /* ex 2 */
  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });