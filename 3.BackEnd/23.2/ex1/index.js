const express = require( 'express' );
const router = require( './routes' );

const app = express();
app.use( express.json() );
app.use( router );
app.get('/', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});
app.listen(3000, () => console.log('connectado a redeee'))