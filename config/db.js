const mongoose = require('mongoose');
mongoose.promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {useMongoClient: true})

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
});