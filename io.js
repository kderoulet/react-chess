const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log('SOCKET IO IS CONNECTED')
    socket.on('update', (data1) => {
        io.sockets.emit('update-state', data1)
    })        
})

// var nsp = io.of('/my-namespace');
// nsp.on('connection', function(socket) {
//    console.log('someone connected');
//    nsp.emit('hi', 'Hello everyone!');
// });

  

module.exports = io