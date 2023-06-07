const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: '*',
});

const PORT = process.env.PORT || 8080;

io.on('connection', (socket: any) => {
    socket.on('message', (message: string) => {
        console.log(message);
        io.emit('message',
            `${message}`
        );
    });
});

server.listen(PORT, () => {
    console.log(`App hosted on: http://localhost:${PORT}`);
});
