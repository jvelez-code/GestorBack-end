import express from 'express';
var body_parser = require('body-parser');
import morgan from 'morgan';
import cors from 'cors';
import usuarioRouter from './routes/usuario.routes';
import askEstadoExtensionRouter from './routes/askEstadoExtension.routes '




const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
//app.use(body_parser.urlencoded({extended:true}));
app.use(
    usuarioRouter,
    askEstadoExtensionRouter);


export default app;