import express from 'express';
import middlewareError from './middlewares/middleware.error';
import router from './routes';

const app = express();
app.use(express.json())
app.use(router);
app.use(middlewareError);

app.listen(3000,()=> console.log('posta 3000 ok '));
