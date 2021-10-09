import express from 'express';
import morgan from "morgan";

// Initializations
const app = express();
const isDev = process.env.NODE_ENV !== 'production';

// Settings
app.set('port', process.env.PORT || 5000)

// Middlewares
app.use(express.json());
isDev && app.use(morgan('dev'));

export default app;
