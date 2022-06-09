const express = require( 'express' );
const router = express.Router();
const booksController = require( '../controllers/booksController' );

router.use('/books', booksController)

module.exports = router;