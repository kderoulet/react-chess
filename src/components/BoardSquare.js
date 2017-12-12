import React from 'react'

const BoardSquare = (props) => {
    let content
    switch (props.squareVal) {
        case 1: content = "♙";
        break
        case 2: content = "♟";
        break
        case 3: content = "♗";
        break
        case 4: content = "♝";
        break
        case 5: content = "♘";
        break
        case 6: content = "♞";
        break
        case 7: content = "♖";
        break
        case 8: content = "♜";
        break
        case 9: content = "♕";
        break
        case 10: content = "♛";
        break
        case 11: content = "♔";
        break
        case 12: content = "♚";
        break
        default: break;
        
    }
    return (
        <td 
            onClick={(e) => {props.handleMovement(e)}}
            datavalue={props.squareVal}
            datarank={props.rank}
            dataindexnumber={props.index}
            datathreatened="0"
            >
             {content}
        </td>
    )
}

export default BoardSquare