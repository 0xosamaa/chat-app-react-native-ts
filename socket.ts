import io from 'socket.io-client';

const socket = io('ws://192.168.1.15:8080');

export default socket;
