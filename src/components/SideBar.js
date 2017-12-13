import React from 'react'

const SideBar = (props) => {
    let content1
    let content2
    if (props.gameOver) {
        if (props.winner === 1) {
            content1 = "White is the Winner"
        }
        else if (props.winner === 2) {
            content1 = "Black is the Winner"
        }
        else content1 = "Draw"
    }
    else if (props.turnCounter === 1) {
        content1 = "White's Turn"
        if (props.whiteInCheck) {
            content2 = "Check"
        }
    }
    else if (props.turnCounter === 0) {
        content1 = "Black's Turn"
        if (props.blackInCheck) {
            content2 = "Check"
        }
    }
    else if (props.turnCounter === 50) {
        content1 = "Promote Your Pawn"
    }
    return(
        <div>
            {content1}
            <br/>
            {content2}
        </div>
    )
}

export default SideBar