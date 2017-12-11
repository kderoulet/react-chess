import React from 'react'
import BoardRow from './BoardRow'

const ChessBoard = (props) => {
    return(
        <table>
            <tbody>
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankEight}
                    rank="8"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankSeven}
                    rank="7"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankSix}
                    rank="6"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankFive}
                    rank="5"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankFour}
                    rank="4"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankThree}
                    rank="3"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankTwo}
                    rank="2"
                />
                <BoardRow 
                    handleMovement={props.handleMovement}
                    rankState={props.rankOne}
                    rank="1"
                />
            </tbody>
        </table>
    )
}

export default ChessBoard