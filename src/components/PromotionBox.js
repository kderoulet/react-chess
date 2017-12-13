import React from 'react'
import PromotionTile from './PromotionTile'

const PromotionBox = (props) => {
    let promotionPieces = []
    if (props.promoteWhite) {
        promotionPieces = [3, 5, 7, 9]
    }
    else if (props.promoteBlack) {
        promotionPieces = [4, 6, 8, 10]
    }
    return(
        <div>
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