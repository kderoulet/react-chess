import React from 'react'

const BoardSquare = (props) => {
    let content
    let border
    let color
    if (props.rank % 2) {
        if (props.index % 2) {
            color = "white"
        } else color = "lightblue"
    } else {
        if (props.index % 2) {
            color = "lightblue"
        } else color = "white"
    }
    switch (props.squareVal) {
        case 1: content = "♙";
        break
        case 101: content = "♙";
        break
        case 2: content = "♟";
        break
        case 102: content = "♟";
        break
        case 3: content = "♗";
        break
        case 103: content = "♗"
        break
        case 4: content = "♝";
        break
        case 104: content = "♝"
        break
        case 5: content = "♘";
        break
        case 105: content = "♘"
        break
        case 6: content = "♞";
        break
        case 106: content = "♞";
        break
        case 7: content = "♖";
        break
        case 107: content = "♖";
        break
        case 8: content = "♜";
        break
        case 108: content = "♜";
        break
        case 9: content = "♕";
        break
        case 109: content = "♕";
        break
        case 10: content = "♛";
        break
        case 110: content = "♛";
        break
        case 11: content = "♔";
        break
        case 111: content = "♔";
        break
        case 12: content = "♚";
        break
        case 112: content = "♚";
        break
        default: break;
    }
    props.squareVal >= 100 ? border="2px blue solid" : border="1px black solid"
    return (
        <td 
            onClick={(e) => {props.handleMovement(e)}}
            datavalue={props.squareVal}
            datarank={props.rank}
            dataindexnumber={props.index}
            style={{border: border, backgroundColor: color}}
            >
             {content}
        </td>
    )
}

export default BoardSquare