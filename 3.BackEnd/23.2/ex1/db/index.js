const mysql = require( 'mysql2/promise' );

const connection = mysql.createPool( {
  host: "localhost",
  port: 3306,
  user: "lorene",
  password: "lor55fdspp",
  database: "cep_lookup"
} );

module.exports = connection ;