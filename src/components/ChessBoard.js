import React from 'react'
import BoardRow from './BoardRow'

const ChessBoard = (props) => {
    return(
        <table>
            <tbody>
                <BoardRow />
                <BoardRow />
                <BoardRow />
                <BoardRow />
                <BoardRow />
                <BoardRow />
                <BoardRow />
                <BoardRow />
            </tbody>
        </table>
    )
}

export default ChessBoard