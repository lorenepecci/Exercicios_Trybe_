const express = require( 'express' );
const routerController = express.Router();
const serviceBooks = require( '../services/booksService' );

routerController.get( '/', async ( req, res ) => {
  const resp = serviceBooks.getAll();
  return res.status( 200 ).json( resp );
})

module.exports = routerController;