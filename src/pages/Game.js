import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ChessBoard from '../components/ChessBoard'

const Game = (props) => {
    return(
        <div className='row'>
            <div className='col'>                    
            <div id="board" class="board">
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