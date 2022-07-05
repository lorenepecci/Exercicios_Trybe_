const express = require('express');
const router = express.Router();

const controller = require('./src/controllers/productController')

router.use( '/products', controller );

module.exports = router;