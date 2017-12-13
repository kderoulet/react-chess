import React from 'react'

const SideBar = (props) => {
    let content
    if (props.turnCounter === 1) {
        content = "White's Turn"
    }
    else if (props.turnCounter === 0) {
        content = "Black's Turn"
    }
    else if (props.turnCounter === 50) {
        content = "Promote Your Pawn"
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default SideBar