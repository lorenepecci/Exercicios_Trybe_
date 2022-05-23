const express = require( 'express' );
const {getByCep}= require( '../models/cepModel' );
const router = express.Router();

router.get( '/:cep', async ( req, res ) => {
  const { cep } = req.params;
  const resp = await getByCep( cep );
  return res.status(200).json({message: 'requisição feita com sucesso!'})
} );


module.exports = router;