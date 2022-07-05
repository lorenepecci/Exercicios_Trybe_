const express = require('express');
const app = express();
const router = require( './routes.js' );
app.use( express.json() );

app.use( router);
app.listen(3000, () => console.log('logado na porta 3000'))