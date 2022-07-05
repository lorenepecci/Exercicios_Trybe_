const connection = require( '../db' );

const add = async (name, brand) => {
  const [ row ] = connection.execute( 'INSERT INTO (name, brand) VALUES (?,?,?)', [ name, brand ] );
  return {
    id: row.insertId,
    name, brand
  }
}

module.exports = {
  add
}