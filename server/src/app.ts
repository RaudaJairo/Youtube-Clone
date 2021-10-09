const express = require("express");
const morgan = require('morgan');

// Initializations
const app = express();
const isDev = process.env.NODE_ENV !== 'production';

// Settings
app.set('port', process.env.PORT || 5000)

// Middlewares
app.use(express.json({ extended: false }));
isDev && app.use(morgan('dev'));

module.exports = app;
