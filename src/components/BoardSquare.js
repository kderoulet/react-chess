import React from 'react'

const BoardSquare = (props) => {
    return (
        <td 
            onClick={(e) => {props.handleMovement(e)}}
            datavalue={props.squareVal}
            datarank={props.rank}
            dataindexnumber={props.index}
            datathreatened="0"
            style={{border: "1px solid black", padding: "10px"}}
            >
            {props.squareVal}
        </td>
    )
}

export default BoardSquare