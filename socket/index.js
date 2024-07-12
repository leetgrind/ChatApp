const express = require("express");
const http = require("http");
const {Server} = require("socket.io");


const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`${socket.id} - user connected`);
    socket.on('chat message', (msg) => {
        io.emit('chat message', `${socket.id} - ${msg}`);
        console.log(`${socket.id} - sent message - ${msg}`);
    })
    socket.on('disconnect', () => {
        console.log(`${socket.id} - user disconnected`);
    });
})

app.get("/", (req, res) => {
    res.sendFile( __dirname +"/index.html");
})

server.listen(3001, () => {
    console.log('listening on 3001');
})