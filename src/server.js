const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const authenticate = require('./config/authenticate.json');

const server = express();
const PORT = 3333;

const { user } = authenticate;
const { password } = authenticate;
const url = `mongodb+srv://${user}:${password}@cluster0-uw7wb.mongodb.net/omnistack8?retryWrites=true&w=majority`;

mongoose.connect( url, { useNewUrlParser: true } );

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(PORT);