const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const http = require('http').Server(app);
require('dotenv').config();


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', require('./routes/api'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname, 'build', '/index.html')
});

var port = process.env.PORT || 3001;

const server = app.listen(port, (err) => {
    console.log(`Express app running on port ${port}`);
  });
require('./io').attach(server);