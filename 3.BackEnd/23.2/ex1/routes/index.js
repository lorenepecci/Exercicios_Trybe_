const express = require( 'express' );
const router = express.Router();
const cepController = require( '../controllers/cepController' );
router.use( '/cep', cepController );

module.exports = router;