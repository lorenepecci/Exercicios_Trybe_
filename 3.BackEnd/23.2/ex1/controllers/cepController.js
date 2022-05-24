const express = require( 'express' );
const res = require( 'express/lib/response' );
const {getByCep, add}= require( '../models/cepModel' );
const router = express.Router();

router.get( '/', async ( req, res ) => {
  return res.status(200).json({message: 'requisição feita com sucesso!'})
} );

router.get( '/:cep', async ( req, res ) => {
  const { cep } = req.params;
  const [ resp ] = await getByCep( cep );
  console.log(resp)
  return res.status(200).json({message: 'requisição feita com sucesso!'})
} );

router.post( '/', async ( req, res ) => {
  console.log( req.body );
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  try {
    const [ row ] = await add(Number(cep), logradouro, bairro, localidade, uf );
    console.log( row, 'entrou no try do post');
    return res.status( 200 ).json( row );
  } catch ( err ) {
    return res.status(500).json({message: err.message})
  }
})


module.exports = router;