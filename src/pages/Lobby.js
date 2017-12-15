import React from 'react'
const io = require('socket.io-client');  

const Lobby = (props) => {
    this.socket = io.connect('http://localhost:3000');
    this.socket.on()

    // handleGameJoin = (gameState) => {
    //     this.setState({game: gameState}, () => {
    //       let thisTurnNo = this.props.user._id === this.state.game.player1.id ? this.state.game.player1.turnNo : this.state.game.player2.turnNo;
    //       this.props.handleUserGameJoin(this.state.game.id, thisTurnNo);
    //     });
    //   }
    


    return(
        <div>
            Matchmaking. This might take a minute.
        </div>
    )
    
}
export default Lobby