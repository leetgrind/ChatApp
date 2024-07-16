const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

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