require('dotenv').config();
const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require( './routes' );
const middleawareError = require( './middlewares/error' );

app.use( express.json() );
app.use( routes );
app.use( middleawareError );

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));