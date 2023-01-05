import io from './servidor.js';


io.on('connection', (socket) => {
    console.log(`Client connected with ID: ${socket.id}`)
})