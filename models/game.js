const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var gameSchema = new Schema({
    users: []
}, {
    timestamps: true
});

module.exports = mongoose.model("Game", gameSchema)