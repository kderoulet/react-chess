import React from 'react'

const PromotionTile = (props) => {
    let content
    switch (props.val) {
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
        default: break;
    }
    return(
        <td 
        datavalue={props.val}
        onClick={(e) => {props.handleSelection(e)}}
        >
            {content}
        </td>
    )
}

export default PromotionTile