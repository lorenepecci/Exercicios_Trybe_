const read = require( "readline-sync" )
const peso = read.questionInt( 'Qual o seu peso? (em kg)' );
const altura = read.questionFloat('Qual o sua altura? (em m)');
const calculateIMC = ( altura, peso ) => {
  const imc = peso/(altura**2)
  console.log( `IMC:  ${ imc }` )
  return imc;
}

const resultOfIMC = ( imc ) => {
  let resp = ''
  /* switch ( true ) {
    case ( imc < 18 ):
      resp = "baiaxo";
      break;
    default:
      resp = "kkk"
  } */
  if ( imc < 18.5 ) {
    resp = "Abaixo do peso (magreza)"
  } else if ( imc <= 24.9 ) {
    resp = "Peso normal"
  } else if (imc <= 29.9 ) {
    resp = "Sobrepeso"
  } else if (imc <= 34.9 ) {
    resp = "Obesidade grau 1"
  }else if (imc <= 39.9 ) {
    resp = "Obesidade grau 2"
  }else if (imc > 40 ) {
    resp = "Obesidade grau 3"
  } 
  console.log(resp)
}

resultOfIMC(calculateIMC( altura, peso ));