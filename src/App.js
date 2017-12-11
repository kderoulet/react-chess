import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing'
import Game from './pages/Game'

class App extends Component {
  constructor(props) {
    super(props);
    this.state=Object.assign(
      this.getInitialBoardState()
    )
  }

  getInitialBoardState() {
    return {
        rankEight: [8, 6, 4, 10, 12, 4, 6, 8],
        rankSeven: [2, 2, 2, 2, 2, 2, 2, 2],
        rankSix: [0, 0, 0, 0, 0, 0, 0, 0],
        rankFive: [0, 0, 0, 0, 0, 0, 0, 0],
        rankFour: [0, 0, 0, 0, 0, 0, 0, 0],
        rankThree: [0, 0, 0, 0, 0, 0, 0, 0],
        rankTwo: [1, 1, 1, 1, 1, 1, 1, 1],
        rankOne: [7, 5, 3, 9, 11, 3, 5, 7],
        selectedPiece: false
    }
  }

  handleMovement = (e) => {
      if (this.state.selectedPiece) {
        if (parseInt(e.target.getAttribute("dataValue"), 10) < 100) {
          this.finishMove();          
        }
        else this.allowMovement(e)
      }
      else {
        this.setState({selectedPiece: e.target})
        switch (e.target.getAttribute("dataValue")) {
          case "1": this.whitePawnMove(e.target)
          break
          case "2": this.blackPawnMove(e.target)
          break
          default: console.log('default')
          break
          case "3": this.bishopMove(e.target)
          break
          case "4": this.bishopMove(e.target)
          break
        }
      }
  }

  whitePawnMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let array1 = this.selectArray(currentRank+1)
    let threatened1 = array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) - 1]
    let threatened2 = array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) + 1]
    if (threatened1 > 0 && threatened1 % 2 === 0) {
      array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) - 1] += 100
    }
    if (threatened2 > 0 && threatened2 % 2 === 0) {
      array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) + 1] += 100
    }
    if (piece.getAttribute("dataRank") === "2") {
      let array2 = this.selectArray(currentRank+2)          
      array1[piece.getAttribute("dataIndexnumber")] += 100;
      array2[piece.getAttribute("dataIndexNumber")] += 100;
    }
    else {
      let moveSquare = array1[piece.getAttribute("dataIndexnumber")];      
        if (moveSquare === 0) {
          array1[piece.getAttribute("dataIndexnumber")] = 100;
        }
    }
  }

  blackPawnMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let array1 = this.selectArray(currentRank-1)
    let threatened1 = array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) - 1]
    let threatened2 = array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) + 1]
    if (threatened1 > 0 && threatened1 % 2 === 1) {
      array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) - 1] += 100
    }
    if (threatened2 > 0 && threatened2 % 2 === 1) {
      array1[parseInt(piece.getAttribute("dataIndexnumber"), 10) + 1] += 100
    }
    if (piece.getAttribute("dataRank") === "7") {
      let array2 = this.selectArray(currentRank-2)          
      array1[piece.getAttribute("dataIndexnumber")] += 100;
      array2[piece.getAttribute("dataIndexNumber")] += 100;
    }
    else {
      let moveSquare = array1[piece.getAttribute("dataIndexnumber")];      
        if (moveSquare === 0) {
          array1[piece.getAttribute("dataIndexnumber")] = 100;
        }
    }
  }



  allowMovement(e) {
    let array1 = this.selectArray(parseInt(this.state.selectedPiece.getAttribute("dataRank"), 10))
    let array2 = this.selectArray(parseInt(e.target.getAttribute("dataRank"), 10))
    array1.splice(this.state.selectedPiece.getAttribute("dataIndexnumber"), 1, 0)
    array2.splice(e.target.getAttribute("dataIndexnumber"), 1, parseInt(this.state.selectedPiece.getAttribute("dataValue"), 10))
    this.finishMove()
  }

  finishMove = () => {
    this.state.rankEight.forEach((num, idx) => {if (num >= 100) this.state.rankEight.splice(idx, 1, num-100)})
    this.state.rankSeven.forEach((num, idx) => {if (num >= 100) this.state.rankSeven.splice(idx, 1, num-100)})
    this.state.rankSix.forEach((num, idx) => {if (num >= 100) this.state.rankSix.splice(idx, 1, num-100)})
    this.state.rankFive.forEach((num, idx) => {if (num >= 100) this.state.rankFive.splice(idx, 1, num-100)})
    this.state.rankFour.forEach((num, idx) => {if (num >= 100) this.state.rankFour.splice(idx, 1, num-100)})
    this.state.rankThree.forEach((num, idx) => {if (num >= 100) this.state.rankThree.splice(idx, 1, num-100)})
    this.state.rankTwo.forEach((num, idx) => {if (num >= 100) this.state.rankTwo.splice(idx, 1, num-100)})
    this.state.rankOne.forEach((num, idx) => {if (num >= 100) this.state.rankOne.splice(idx, 1, num-100)})
    this.setState({selectedPiece: false})
  }

  selectArray(input) {
    switch (input) {
      case 1: return this.state.rankOne
      case 2: return this.state.rankTwo
      case 3: return this.state.rankThree
      case 4: return this.state.rankFour
      case 5: return this.state.rankFive
      case 6: return this.state.rankSix
      case 7: return this.state.rankSeven
      case 8: return this.state.rankEight
      default: console.log('default')
      break
    }
  }
// I want to be able to grab the row of the selected pieces
// based on the row selected is how I will determine the rank values of lines 31 and 32
// parseInt(e.target.className, 10)

  render() {
    return (
      <div className="App container">
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <Landing
              />
            }/>
            <Route exact path='/game' render={() =>
              <Game
                handleMovement={this.handleMovement}
                rankEight={this.state.rankEight}
                rankSeven={this.state.rankSeven}
                rankSix={this.state.rankSix}
                rankFive={this.state.rankFive}
                rankFour={this.state.rankFour}
                rankThree={this.state.rankThree}
                rankTwo={this.state.rankTwo}
                rankOne={this.state.rankOne}
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
