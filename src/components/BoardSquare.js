import React from 'react'

const BoardSquare = (props) => {
    return (
        <td 
            onClick={(e) => {props.handleMovement(e)}}
            datavalue={props.squareVal}
            datarank={props.rank}
            dataindexnumber={props.index}
            datathreatened="0"
            >
            {props.squareVal}
        </td>
    )
}

export default BoardSquare