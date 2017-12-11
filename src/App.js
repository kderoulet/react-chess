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
        rankOne: [7, 5, 4, 9, 11, 3, 5, 7],
        selectedPiece: false
    }
  }

  handleMovement = (e) => {
      if (this.state.selectedPiece) {
        let array1 = this.selectArray(parseInt(this.state.selectedPiece.getAttribute("dataRank"), 10))
        let array2 = this.selectArray(parseInt(e.target.getAttribute("dataRank"), 10))
        console.log(array1)
        console.log(array2)
        array1.splice(this.state.selectedPiece.getAttribute("dataIndexnumber"), 1, 0)
        array2.splice(e.target.getAttribute("dataIndexnumber"), 1, this.state.selectedPiece.getAttribute("dataValue"))
        this.setState({selectedPiece: false})
      }
      else {
        this.setState({selectedPiece: e.target})
      }
  }

  selectArray(input) {
    console.log(input)
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
