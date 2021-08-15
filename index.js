const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const chatRouter = require('./routes/chat')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/chat', chatRouter);

io.on('connection', (socket) => {
    console.log('a user connected');
    let message = {
        msg:'Hi, this message is from server',
    }
    socket.emit('server to client', JSON.stringify(message));
    socket.on('message from client', (msg) => {
        console.log('id: ' + socket.id);
        console.log('message: ' + msg);
      });
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

server.listen(3000, () => {
    console.log('listening on :3000');
});