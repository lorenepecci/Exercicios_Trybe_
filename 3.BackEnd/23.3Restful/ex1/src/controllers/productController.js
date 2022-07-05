const model = require( '../models/productModel' );
const express = require( 'express' );
const router = express.Router();

router.get( '/ping', ( _req, res ) => {
  return res.status( 200 ).json( { message: 'pong' } );
})

router.post( '/', async ( req,res) => {
  try {
    const { name, brand } = req.body;
    const [ row ] = await model.add( name, brand );
    return res.status( 200 ).json( row );
  } catch ( err ) {
    return res.status( 401 ).json( { message: err.message } );
  }
} );

module.exports = router;