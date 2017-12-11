import React from 'react'
import ChessBoard from '../components/ChessBoard'

const Game = (props) => {
    return(
        <div className='row'>
            <div className='col'>                    
            <div id="board" className="board">
                chessboard here:
                <ChessBoard
                    handleMovement={props.handleMovement}
                    rankEight={props.rankEight}
                    rankSeven={props.rankSeven}
                    rankSix={props.rankSix}
                    rankFive={props.rankFive}
                    rankFour={props.rankFour}
                    rankThree={props.rankThree}
                    rankTwo={props.rankTwo}
                    rankOne={props.rankOne}
                />
            </div>
            </div>
            <div className='col'>
                words
            </div>
        </div>
    )
}

export default Game