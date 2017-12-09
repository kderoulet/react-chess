const Game = require('../models/Game')

function startGame(req, res) {
    Game.create()
}

module.exports = {
    startGame
}