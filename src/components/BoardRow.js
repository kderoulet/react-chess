import React from 'react'
import BoardSquare from './BoardSquare'


const BoardRow = (props) => {    
    return(
        <tr>
            {props.rankState.map((squareVal, index) => 
                <BoardSquare
                    rank={props.rank}
                    squareVal={squareVal}
                    key={index}
                    index={index}
                    handleMovement={props.handleMovement}
                />
            )}
        </tr>
    )
}

export default BoardRow