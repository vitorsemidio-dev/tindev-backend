const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const authenticate = require('./config/authenticate.json');
const PORT = 3333;


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


io.on('connection', socket => {
    console.log('Nova conexão', socket.id);
});


const { user } = authenticate;
const { password } = authenticate;
const url = `mongodb+srv://${user}:${password}@cluster0-uw7wb.mongodb.net/omnistack8?retryWrites=true&w=majority`;
mongoose.connect( url, { useNewUrlParser: true } );


app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(PORT);