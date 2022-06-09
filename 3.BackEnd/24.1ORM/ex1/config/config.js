require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'booksSchema',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    port:process.env.DATABASE_PORT,
  },
}
