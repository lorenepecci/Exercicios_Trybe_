const ex = require( 'express' );
const app = ex();
app.use( ex.json() );

app.listen(3000, () => console.log('logado na porta 3000'))