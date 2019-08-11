const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const authenticate = require('./config/authenticate.json');
const PORT = 3333;


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {

}

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    console.log(user, socket.id);

    connectedUsers[user] = socket.id
});


const { user } = authenticate;
const { password } = authenticate;
const url = `mongodb+srv://${user}:${password}@cluster0-uw7wb.mongodb.net/omnistack8?retryWrites=true&w=majority`;
mongoose.connect( url, { useNewUrlParser: true } );


app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    
    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(PORT);