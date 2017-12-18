const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('favicon')
require('dotenv').config();
require('./config/db')

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let user1
let user2
var roomno = 1;
io.on('connection', function(socket) {
   if (io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1) {
    roomno++;
   }
   socket.join("room-"+roomno);
   io.sockets.in("room-"+roomno).emit('connect-to-room', socket.id);
   io.of('/').in("room-"+roomno).clients((error, clients) => {
    if (error) throw error;
    io.sockets.in("room-"+roomno).emit('users', clients)
  });
   socket.on('update', function(state) {
       io.sockets.in("room-"+roomno).emit('update-game', state)
   })

   function getAllRoomMembers(room, _nsp) {
    var roomMembers = [];
    var nsp = (typeof _nsp !== 'string') ? '/' : _nsp;
    for( var member in io.sockets.adapter.rooms[room] ) {
        roomMembers.push(member);
    }
    return roomMembers;
    }

   socket.on('disconnect', function () {
 });
})


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use('/api/users', require('./routes/api'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname, 'build', '/index.html')
});

var port = process.env.PORT || 3001;

http.listen(port, function() {
 });
 