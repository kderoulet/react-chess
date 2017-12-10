import React from 'react'
import BoardSquare from './BoardSquare'

const BoardRow = (props) => {
    return(
        <tr>
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
        </tr>
    )
}

export default BoardRow