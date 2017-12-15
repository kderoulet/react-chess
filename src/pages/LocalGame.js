import React from 'react'
import ChessBoard from '../components/ChessBoard'
import SideBar from '../components/SideBar'
import PromotionBox from '../components/PromotionBox'
import {Link} from 'react-router-dom'

const LocalGame = (props) => {
    return(
        <div className='row'>
            <div className='col-auto'>    
            <Link to='/' style={{fontSize: 20}}>Back</Link>
            <br/>                
                <ChessBoard
                    handleMovement={props.handleMovement}
                    rankEight={props.rankEight}
                    rankSeven={props.rankSeven}
                    rankSix={props.rankSix}
                    rankFive={props.rankFive}
                    rankFour={props.rankFour}
                    rankThree={props.rankThree}
                    rankTwo={props.rankTwo}
                    rankOne={props.rankOne}
                />
            </div>
            <div className='col' style={{marginLeft: 30}}>
                <PromotionBox 
                    handleSelection={props.handleSelection}
                    promoteWhite={props.promoteWhite}
                    promoteBlack={props.promoteBlack}
                />
                <SideBar
                    getInitialBoardState={props.getInitialBoardState}
                    turnCounter={props.turnCounter}
                    whiteInCheck={props.whiteInCheck}
                    blackInCheck={props.blackInCheck}
                    gameOver={props.gameOver}
                    winner={props.winner}
                />
            </div>
        </div>
    )
}

export default LocalGame