const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: '*',
});

const PORT = process.env.PORT || 8081;

io.on('connection', (socket: any) => {
    socket.on('message', (message: any) => {
        io.emit('message', message);
    });
});

server.listen(PORT, () => {
    console.log(`App hosted on: http://localhost:${PORT}`);
});
