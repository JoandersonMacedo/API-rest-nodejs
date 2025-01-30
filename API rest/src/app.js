import express from 'express';
import routes from './routes.js';

const app = express();

// Usar o routes
app.use(routes);

// Indicar para o app ler body com json
app.use(express.json());

export default app;
