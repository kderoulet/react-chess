const mongoose = require('mongoose');
mongoose.promise = global.Promise;

mongoose.connect("mongodb://localhost/chess", {useMongoClient: true})

const db = mongoose.connection;
