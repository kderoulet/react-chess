import React from 'react'
import ChessBoard from '../components/ChessBoard'
import SideBar from '../components/SideBar'
import {Link} from 'react-router-dom'
import PromotionBox from '../components/PromotionBox'


const MatchedGame = (props) => {
    props.runSockets();
    let pageDisplay1 = props.black ? "none" : "default";
    let pageDisplay2 = props.black ? "default" : "none";

    return(
        <div>
            <div style={{display: pageDisplay1}}>
                <span style={{fontSize: 40}}>Matchmaking</span>
                <br/>
                This might take a minute.
                <br/>
            </div>
        <div style={{display: pageDisplay2}}className='row'>
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
                    turnCounter={props.turnCounter}
                    whiteInCheck={props.whiteInCheck}
                    blackInCheck={props.blackInCheck}
                    gameOver={props.gameOver}
                    winner={props.winner}
                />
            </div>
        </div>
    </div>
    )
    
}
export default MatchedGame


