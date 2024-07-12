const express = require("express");
const http = require("http");
const {Server} = require("socket.io");


const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
})

app.get("/", (req, res) => {
    res.sendFile( __dirname +"/index.html");
})

server.listen(3001, () => {
    console.log('listening on 3001');
})