var app = require('http').createServer();
var io = module.exports.io = require('socket.io')(app);

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager');

//io represents a group of sockets, whenever connection established, io send a socket to the SocketManager
io.on('connection', SocketManager);

app.listen(PORT, ()=>{
    console.log("Connected to port:" + PORT);
});