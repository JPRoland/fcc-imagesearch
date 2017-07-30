const express = require('express');
const routes = require('./api/routes/index');


const app = express();

app.use('/api', routes);

module.exports = app;