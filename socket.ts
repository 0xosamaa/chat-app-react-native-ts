import io from 'socket.io-client';

const socket = io('ws://192.168.1.5:8081');

export default socket;
