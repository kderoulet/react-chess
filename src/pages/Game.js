import React from 'react'
import ChessBoard from '../components/ChessBoard'

const Game = (props) => {
    return(
        <div className='row'>
            <div className='col'>                    
            <div id="board" className="board">
                chessboard here:
                <ChessBoard/>
            </div>
            </div>
            <div className='col'>
                words
            </div>
        </div>
    )
}

export default Game