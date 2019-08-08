const express = require('express');
const routes = require('./routes');

const server = express();
const PORT = 3000;

server.use(routes);

server.listen(PORT);