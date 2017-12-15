const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log('SOCKET IO IS CONNECTED')
    // socket.join('matchmaking');
    
    socket.on('update', (gameData) => {
        io.sockets.emit('update-state', gameData)
        // io.to(`game ${game.id}`).emit('update-state', gameData)
    })        
})

// function getWaitingPlayers(room) {
//     let players = [];
//     for (let playerId in io.sockets.adapter.rooms[room].sockets) {
//       players.push(io.sockets.connected[clientId]);
//     }
//     return players;
//   }
  

// function makeMatch() {
//     let players = getWaitingPlayers('matchmaking')
//     if (players.length >= 2) {
//         players[0].leave('matchmaking')
//         players[1].leave('matchmaking')
//         players[0].join(`game ${game.id}`)
//         players[1].join(`game ${game.id}`)
//     }
// }

function leaveGame(socket) {
    
}

  

module.exports = io