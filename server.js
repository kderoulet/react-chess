const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db')

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var roomno = 1;
io.on('connection', function(socket) {
   if (io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1) {
    roomno++;
   }
   socket.join("room-"+roomno);
   
   io.sockets.in("room-"+roomno).emit('connectToRoom', socket.id);
   socket.on('assign-players', function(white, black) {
    io.sockets.in("room-"+roomno).emit('start-game', white, black)
   })
   socket.on('update', function(state) {
       io.sockets.in("room-"+roomno).emit('update-game', state)
   })
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
 