import React from 'react'
import BoardRow from './BoardRow'

const ChessBoard = (props) => {
    return(
        <table>
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </table>
    )
}

export default ChessBoard