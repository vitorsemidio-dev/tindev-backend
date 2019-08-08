const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}. Bem vindo ao Tinder.`);
});

routes.post('/devs', (req, res) => {
    const { body } = req;
    return res.json( body );
})


module.exports = routes;