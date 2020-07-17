const express = require('express');
const app = express();
const routes = require('./routes')
const db = require('../db')
app.use(routes);

app.listen(3000, () => console.log("Rodando Servidor"));