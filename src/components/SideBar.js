import React from 'react'

const SideBar = (props) => {
    let content1
    let content2
    let btnDisplay = "none"
    if (props.gameOver) {
        if (props.winner === 1) {
            content1 = "White Wins"
            btnDisplay = "block"
        }
        else if (props.winner === 2) {
            content1 = "Black Wins"
            btnDisplay = "block"
        }
        else {
            content1 = "Draw"
            btnDisplay = "block"
        }
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
            <div style={{fontSize: 40, textAlign: "left"}}>{content1}</div>
            <div style={{fontSize: 40, textAlign: "left"}}>{content2}</div>
            <div onClick={(e) => props.getInitialBoardState()} style={{textAlign: "left", display: btnDisplay}}><button className="btn btn-info">Play Again?</button></div>
        </div>
    )
}

export default SideBar