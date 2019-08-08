const express = require('express');

const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}. Bem vindo ao Tinder`);
})

server.listen(PORT);