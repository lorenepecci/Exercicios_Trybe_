const express = require( 'express' );
const routerController = express.Router();
const serviceBooks = require( '../services/booksService' );

routerController.get( '/', async ( req, res ) => {
  const resp = await serviceBooks.getAll();
  return res.status( 200 ).json( resp );
} )

routerController.get( '/:id', async ( req, res ) => {
  const resp = await serviceBooks.getById(req.params.id);
  return res.status( 200 ).json( resp );
})

routerController.post( '/', async ( req, res ) => {
  const { title, author, pageQuantity } = req.body;
  const resp = await serviceBooks.create( title, author, pageQuantity );
  return res.status( 200 ).json( resp );
} );

routerController.put( '/:id', async ( req, res ) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  const resp = await serviceBooks.update( id, title, author, pageQuantity );
  if ( !resp ) {
    return res.status( 404 ).json( { message: 'Book not found' });
  }
  return res.status( 200 ).json( resp );
} )

routerController.delete( '/:id', async ( req, res ) => {
  const { id } = req.params;
  const resp = await serviceBooks.deletee( id);
   if ( !resp ) {
    return res.status( 404 ).json( { message: 'Book not found' });
  } 
  return res.status( 200 ).end();
})

module.exports = routerController;