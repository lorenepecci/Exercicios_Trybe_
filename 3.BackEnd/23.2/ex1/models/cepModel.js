const connection = require( '../db' );

const getByCep = ( cep ) => {
  return connection.execute( 'SELECT * FROM cep_lookup.ceps WHERE cep_lookup.ceps.cep = ?',
    [ cep ] );
}

module.exports = {
  getByCep
}