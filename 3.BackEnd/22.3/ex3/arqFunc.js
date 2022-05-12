const funcOnlyNumber = (param) => {
  if ( typeof param == "string" ) {
    return 'o valor deve ser um número!'
  } else {
    return 'parabens is a number!';
  }
}
module.exports = funcOnlyNumber;