const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}. Bem vindo ao Tinder.`);
});


module.exports = routes;