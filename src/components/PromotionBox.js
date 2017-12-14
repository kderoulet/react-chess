import React from 'react'
import PromotionTile from './PromotionTile'

const PromotionBox = (props) => {
    let content
    let style={marginBottom: 25}
    let promotionPieces = []
    if (props.promoteWhite) {
        promotionPieces = [3, 5, 7, 9]
    }
    else if (props.promoteBlack) {
        promotionPieces = [4, 6, 8, 10]
    }
    else style={marginBottom: 80}
    return(
        <div style={style}>
            {content}
            <table>
                <tbody>
                    <tr>
                        {promotionPieces.map((val, index) =>
                            <PromotionTile
                                handleSelection={props.handleSelection}
                                val={val}
                                key={index}
                            />
                        )} 
                    </tr>
                </tbody>
            </table>           
        </div>
    )
}

export default PromotionBox