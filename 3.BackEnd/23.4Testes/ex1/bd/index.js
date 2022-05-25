const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lorene',
  password: 'lor55fdspp',
  database: 'model_example'});

module.exports = connection;