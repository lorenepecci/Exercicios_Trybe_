const connection = require( '../db' );


const getByCep = async ( cep ) => {
  return await connection.execute( 'SELECT * FROM cep_lookup.ceps WHERE cep_lookup.ceps.cep = ?',
    [ cep ] );
}

const add = async ( cep, logradouro, bairro, localidade, uf ) => {
  console.log( 'cheguei no post' );
  const [row] = await connection.execute( 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)',
    [cep, logradouro, bairro, localidade, uf ] );
  console.log(row, 'row do add')
  return {
    cep, logradouro, bairro, localidade, uf 
  };
}

module.exports = {
  getByCep,
  add
}