const altura = 1.69
const peso = 59
const calculateIMC = ( altura, peso ) => {
  const imc = peso/(altura**2)
  console.log(`IMC:  ${imc}`)
}

calculateIMC( altura, peso );