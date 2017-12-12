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
        selectedPiece: false,
        turnCounter: 1
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
          case "3": this.whiteBishopMove(e.target)
          break
          case "4": this.blackBishopMove(e.target)
          break
          case "5": this.blackKnightMove(e.target)
          break
          case "6": this.whiteKnightMove(e.target)
          break
          case "7": this.whiteRookMove(e.target)
          break
          case "8": this.blackRookMove(e.target)
          break
          case "9": this.whiteQueenMove(e.target)
          break
          case "10": this.blackQueenMove(e.target)
          break
          case "11": this.whiteKingMove(e.target)
          break
          case "12": this.blackKingMove(e.target)
          break
          default: console.log('default')
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

  blackBishopMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    this.scanDLBishopMove(currentRank, currentIndex, 1)
    this.scanDRBishopMove(currentRank, currentIndex, 1)
    this.scanULBishopMove(currentRank, currentIndex, 1)
    this.scanURBishopMove(currentRank, currentIndex, 1)
  }

  whiteBishopMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    this.scanDLBishopMove(currentRank, currentIndex, 0)
    this.scanDRBishopMove(currentRank, currentIndex, 0)
    this.scanULBishopMove(currentRank, currentIndex, 0)
    this.scanURBishopMove(currentRank, currentIndex, 0)
  }

  scanDLBishopMove(rank, idx, remainder) {
    if (this.selectArray(rank-1)) {
      let nextRank = this.selectArray(rank-1)
      if (nextRank[idx-1] === 0) {
        nextRank[idx-1] += 100
        let nRank = rank-1
        let nIdx = idx-1
        this.scanDLBishopMove(nRank, nIdx, remainder)
      }
      else if (nextRank[idx-1] % 2 === remainder) {
        nextRank[idx-1] += 100
      }
    }
  }

  scanDRBishopMove(rank, idx, remainder) {
    if (this.selectArray(rank-1)) {
      let nextRank = this.selectArray(rank-1)
      if (nextRank[idx+1] === 0) {
        nextRank[idx+1] += 100
        let nRank = rank-1
        let nIdx = idx+1
        this.scanDRBishopMove(nRank, nIdx, remainder)
      }
      else if (nextRank[idx+1] % 2 === remainder) {
        nextRank[idx+1] += 100
      }      
    }    
  }

  scanULBishopMove(rank, idx, remainder) {
    if (this.selectArray(rank+1)) {
      let nextRank = this.selectArray(rank+1)
      if (nextRank[idx-1] === 0) {
        nextRank[idx-1] += 100
        let nRank = rank+1
        let nIdx = idx-1
        this.scanULBishopMove(nRank, nIdx, remainder)
      }
      else if (nextRank[idx-1] % 2 === remainder) {
        nextRank[idx-1] += 100
      }
    }
  }

  scanURBishopMove(rank, idx, remainder) {
    if (this.selectArray(rank+1)) {
      let nextRank = this.selectArray(rank+1)
      if (nextRank[idx+1] === 0) {
        nextRank[idx+1] += 100
        let nRank = rank+1
        let nIdx = idx+1
        this.scanURBishopMove(nRank, nIdx, remainder)
      }
      else if (nextRank[idx+1] % 2 === remainder) {
        nextRank[idx+1] += 100
      }   
    }    
  }

  blackKnightMove(piece) {
    this.scanKnightMove(piece, 0)
  }

  whiteKnightMove(piece) {
    this.scanKnightMove(piece, 1)
  }

  scanKnightMove(piece, remainder) {
      let knightRank = parseInt(piece.getAttribute("dataRank"), 10)
      let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
      if (this.selectArray(knightRank+2)) {
        let upperRank = this.selectArray(knightRank+2)
        if (upperRank[currentIndex+1] === 0 || upperRank[currentIndex+1] % 2 === remainder) {
          upperRank[currentIndex+1] += 100
        }
        if (upperRank[currentIndex-1] === 0 || upperRank[currentIndex-1] % 2 === remainder) {
          upperRank[currentIndex-1] += 100
        }
      }
      if (this.selectArray(knightRank+1)) {
        let upperRank = this.selectArray(knightRank+1)
        if (upperRank[currentIndex+2] === 0 || upperRank[currentIndex+2] % 2 === remainder) {
          upperRank[currentIndex+2] += 100
        }
        if (upperRank[currentIndex-2] === 0 || upperRank[currentIndex-2] % 2 === remainder) {
          upperRank[currentIndex-2] += 100
        }
      }
      if (this.selectArray(knightRank-1)) {
        let lowerRank = this.selectArray(knightRank-1)
        if (lowerRank[currentIndex+2] === 0 || lowerRank[currentIndex+2] % 2 === remainder) {
          lowerRank[currentIndex+2] += 100
        }
        if (lowerRank[currentIndex-2] === 0 || lowerRank[currentIndex-2] % 2 === remainder) {
          lowerRank[currentIndex-2] += 100      
        }
      }
      if (this.selectArray(knightRank-2)) {
        let lowerRank = this.selectArray(knightRank-2)
        if (lowerRank[currentIndex+1] === 0 || lowerRank[currentIndex+1] % 2 === remainder) {
          lowerRank[currentIndex+1] += 100
        }
        if (lowerRank[currentIndex-1] === 0 || lowerRank[currentIndex-1] % 2 === remainder) {
          lowerRank[currentIndex-1] += 100
        }
      }
    }
  

  blackRookMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    this.scanURookMove(currentRank, currentIndex, 1)
    this.scanDRookMove(currentRank, currentIndex, 1)
    this.scanLRookMove(currentRank, currentIndex, 1)
    this.scanRRookMove(currentRank, currentIndex, 1)
  }
  whiteRookMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    this.scanURookMove(currentRank, currentIndex, 0)
    this.scanDRookMove(currentRank, currentIndex, 0)
    this.scanLRookMove(currentRank, currentIndex, 0)
    this.scanRRookMove(currentRank, currentIndex, 0)
  }

  scanURookMove(rank, idx, remainder) {
    if (this.selectArray(rank+1)) {
      let nextRank = this.selectArray(rank+1)
      if (nextRank[idx] === 0) {
        nextRank[idx] += 100
        let nRank = rank+1
        this.scanURookMove(nRank, idx, remainder)
      }
      else if (nextRank[idx] % 2 === remainder) {
        nextRank[idx] += 100
      }   
    }    
  }
  
  scanDRookMove(rank, idx, remainder) {
    if (this.selectArray(rank-1)) {
      let nextRank = this.selectArray(rank-1)
      if (nextRank[idx] === 0) {
        nextRank[idx] += 100
        let nRank = rank-1
        this.scanDRookMove(nRank, idx, remainder)
      }
      else if (nextRank[idx] % 2 === remainder) {
        nextRank[idx] += 100
      }   
    }    
  }

  scanLRookMove(rank, idx, remainder) {
    let thisRank = this.selectArray(rank)
    if (thisRank[idx-1] === 0) {
      thisRank[idx-1] += 100
      let nIdx = idx-1
      this.scanLRookMove(rank, nIdx, remainder)
    }
    else if (thisRank[idx-1] % 2 === remainder) {
      thisRank[idx-1] += 100
    }   
  }   

  scanRRookMove(rank, idx, remainder) {
    let thisRank = this.selectArray(rank)
    if (thisRank[idx+1] === 0) {
      thisRank[idx+1] += 100
      let nIdx = idx+1
      this.scanRRookMove(rank, nIdx, remainder)
    }
    else if (thisRank[idx+1] % 2 === remainder) {
      thisRank[idx+1] += 100
    }   
  }
  
  blackQueenMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    this.scanURookMove(currentRank, currentIndex, 1)
    this.scanDRookMove(currentRank, currentIndex, 1)
    this.scanLRookMove(currentRank, currentIndex, 1)
    this.scanRRookMove(currentRank, currentIndex, 1)
    this.scanDLBishopMove(currentRank, currentIndex, 1)
    this.scanDRBishopMove(currentRank, currentIndex, 1)
    this.scanULBishopMove(currentRank, currentIndex, 1)
    this.scanURBishopMove(currentRank, currentIndex, 1)
  }

  whiteQueenMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    this.scanURookMove(currentRank, currentIndex, 0)
    this.scanDRookMove(currentRank, currentIndex, 0)
    this.scanLRookMove(currentRank, currentIndex, 0)
    this.scanRRookMove(currentRank, currentIndex, 0)
    this.scanDLBishopMove(currentRank, currentIndex, 0)
    this.scanDRBishopMove(currentRank, currentIndex, 0)
    this.scanULBishopMove(currentRank, currentIndex, 0)
    this.scanURBishopMove(currentRank, currentIndex, 0)
  }
  whiteKingMove(piece) {
    this.scanKingMove(piece, 0)
  }

  blackKingMove(piece) {
    this.scanKingMove(piece, 1)
  }

  scanKingMove(piece, remainder) {
    let kingRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentRank = this.selectArray(kingRank)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    if (currentRank[currentIndex-1] === 0 || currentRank[currentIndex-1] % 2 === remainder) {
      currentRank[currentIndex-1] += 100
    }
    if (currentRank[currentIndex+1] === 0 || currentRank[currentIndex+1] % 2 === remainder) {
      currentRank[currentIndex+1] += 100
    }
    if (this.selectArray(kingRank+1)) {
      let upperRank = this.selectArray(kingRank+1)      
      if (upperRank[currentIndex]=== 0 || upperRank[currentIndex] % 2 === remainder) {
        upperRank[currentIndex] += 100
      }
      if (upperRank[currentIndex+1] === 0 || upperRank[currentIndex+1] % 2 === remainder) {
        upperRank[currentIndex+1] += 100
      }
      if (upperRank[currentIndex-1] === 0 || upperRank[currentIndex-1] % 2 === remainder) {
        upperRank[currentIndex-1] += 100
      }
    }
    if (this.selectArray(kingRank-1)) {
      let lowerRank = this.selectArray(kingRank-1)
      if (lowerRank[currentIndex] === 0 || lowerRank[currentIndex] % 2 === remainder) {
        lowerRank[currentIndex] += 100
      }
      if (lowerRank[currentIndex+1] === 0 || lowerRank[currentIndex+1] % 2 === remainder) {
        lowerRank[currentIndex+1] += 100
      }
      if (lowerRank[currentIndex-1] === 0 || currentRank[currentIndex-1] % 2 === remainder) {
        lowerRank[currentIndex-1] += 100      
      }
    }
  }

  findWhiteKing() {
    let kingRank;
    let kingIndex;
    if (this.state.rankOne.includes(11)) {
      kingRank = 1;
      kingIndex = this.state.rankOne.indexOf(11);
    }
    if (this.state.rankTwo.includes(11)) {
      kingRank = 2;
      kingIndex = this.state.rankTwo.indexOf(11);
    }
    if (this.state.rankThree.includes(11)) {
      kingRank = 3;
      kingIndex = this.state.rankThree.indexOf(11);
    }
    if (this.state.rankFour.includes(11)) {
      kingRank = 4;
      kingIndex = this.state.rankFour.indexOf(11);
    }
    if (this.state.rankFive.includes(11)) {
      kingRank = 5;
      kingIndex = this.state.rankFive.indexOf(11);
    }
    if (this.state.rankSix.includes(11)) {
      kingRank = 6;
      kingIndex = this.state.rankSix.indexOf(11);
    }
    if (this.state.rankSeven.includes(11)) {
      kingRank = 7;
      kingIndex = this.state.rankSeven.indexOf(11);
    }
    if (this.state.rankEight.includes(11)) {
      kingRank = 8;
      kingIndex = this.state.rankEight.indexOf(11);
    }
    this.whiteKingInCheck(kingRank, kingIndex) ? console.log('w check') : console.log('w no check')
  }
  
  whiteKingInCheck(rank, idx) {
    // check for pawns
    switch (2) {
      case this.selectArray(rank+1)[idx+1]: return true
      case this.selectArray(rank+1)[idx-1]: return true
      default: break
    } 
    // check for knights
    switch (6) {
      case this.selectArray(rank+2)[idx+1]: return true
      case this.selectArray(rank+2)[idx-1]: return true
      case this.selectArray(rank+1)[idx+2]: return true
      case this.selectArray(rank+1)[idx-2]: return true
      case this.selectArray(rank-1)[idx+2]: return true
      case this.selectArray(rank-1)[idx-2]: return true
      case this.selectArray(rank-2)[idx+1]: return true
      case this.selectArray(rank-2)[idx-1]: return true
      default: break  
    }
    // check for king
    switch (12) {
      case this.selectArray(rank)[idx+1]: return true
      case this.selectArray(rank)[idx-1]: return true
      case this.selectArray(rank+1)[idx]: return true
      case this.selectArray(rank+1)[idx+1]: return true
      case this.selectArray(rank+1)[idx-1]: return true
      case this.selectArray(rank-1)[idx]: return true
      case this.selectArray(rank-1)[idx+1]: return true
      case this.selectArray(rank-1)[idx-1]: return true
      default: break
    }
    // check for the rooks/queens
    for (let j = idx-1; j >= 0; j--) {
      if (this.selectArray(rank)[j]) {
        if (this.selectArray(rank)[j] === 8 || this.selectArray(rank)[j] === 10) {
          return true
        }
        else j = -1;
      }
    }
    for (let j = idx+1; j <= 8; j++) {
      if (this.selectArray(rank)[j]) {
        if (this.selectArray(rank)[j] === 8 || this.selectArray(rank)[j] === 10) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = rank+1; j <= 8; j++) {
      if (this.selectArray(j)[idx]) {
        if (this.selectArray(j)[idx] === 8 || this.selectArray(j)[idx] === 10) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = rank-1; j >= 0; j--) {
      if (this.selectArray(j)[idx]) {
        if (this.selectArray(j)[idx] === 8 || this.selectArray(j)[idx] === 10) {
          return true
        }
        else j = -1;
      }
    }
    // check for the bishops/queens
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank+j)[idx+j]) {
        if (this.selectArray(rank+j)[idx+j] === 4 || this.selectArray(rank+j)[idx+j] === 10) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank+j)[idx-j]) {
        if (this.selectArray(rank+j)[idx-j] === 4 || this.selectArray(rank+j)[idx-j] === 10) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank-j)[idx+j]) {
        if (this.selectArray(rank-j)[idx+j] === 4 || this.selectArray(rank-j)[idx+j] === 10) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank-j)[idx-j]) {
        if (this.selectArray(rank-j)[idx-j] === 4 || this.selectArray(rank-j)[idx-j] === 10) {
          return true
        }
        else j = 9;
      }
    }
    return false
  }

  findBlackKing() {
    let kingRank;
    let kingIndex;
    if (this.state.rankOne.includes(12)) {
      kingRank = 1;
      kingIndex = this.state.rankOne.indexOf(12);
    }
    if (this.state.rankTwo.includes(12)) {
      kingRank = 2;
      kingIndex = this.state.rankTwo.indexOf(12);
    }
    if (this.state.rankThree.includes(12)) {
      kingRank = 3;
      kingIndex = this.state.rankThree.indexOf(12);
    }
    if (this.state.rankFour.includes(12)) {
      kingRank = 4;
      kingIndex = this.state.rankFour.indexOf(12);
    }
    if (this.state.rankFive.includes(12)) {
      kingRank = 5;
      kingIndex = this.state.rankFive.indexOf(12);
    }
    if (this.state.rankSix.includes(12)) {
      kingRank = 6;
      kingIndex = this.state.rankSix.indexOf(12);
    }
    if (this.state.rankSeven.includes(12)) {
      kingRank = 7;
      kingIndex = this.state.rankSeven.indexOf(12);
    }
    if (this.state.rankEight.includes(12)) {
      kingRank = 8;
      kingIndex = this.state.rankEight.indexOf(12);
    }
    this.blackKingInCheck(kingRank, kingIndex) ? console.log('b check') : console.log('b no check')
  }
  
  blackKingInCheck(rank, idx) {
    // check for pawns
    switch (1) {
      case this.selectArray(rank-1)[idx+1]: return true
      case this.selectArray(rank-1)[idx-1]: return true
      default: break
    } 
    // check for knights
    switch (5) {
      case this.selectArray(rank+2)[idx+1]: return true
      case this.selectArray(rank+2)[idx-1]: return true
      case this.selectArray(rank+1)[idx+2]: return true
      case this.selectArray(rank+1)[idx-2]: return true
      case this.selectArray(rank-1)[idx+2]: return true
      case this.selectArray(rank-1)[idx-2]: return true
      case this.selectArray(rank-2)[idx+1]: return true
      case this.selectArray(rank-2)[idx-1]: return true
      default: break  
    }
    // check for king
    switch (11) {
      case this.selectArray(rank)[idx+1]: return true
      case this.selectArray(rank)[idx-1]: return true
      case this.selectArray(rank+1)[idx]: return true
      case this.selectArray(rank+1)[idx+1]: return true
      case this.selectArray(rank+1)[idx-1]: return true
      case this.selectArray(rank-1)[idx]: return true
      case this.selectArray(rank-1)[idx+1]: return true
      case this.selectArray(rank-1)[idx-1]: return true
      default: break
    }
    // check for the rooks/queens
    for (let j = idx-1; j >= 0; j--) {
      if (this.selectArray(rank)[j]) {
        if (this.selectArray(rank)[j] === 7 || this.selectArray(rank)[j] === 9) {
          return true
        }
        else j = -1;
      }
    }
    for (let j = idx+1; j <= 8; j++) {
      if (this.selectArray(rank)[j]) {
        if (this.selectArray(rank)[j] === 7 || this.selectArray(rank)[j] === 9) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = rank+1; j <= 8; j++) {
      if (this.selectArray(j)[idx]) {
        if (this.selectArray(j)[idx] === 7 || this.selectArray(j)[idx] === 9) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = rank-1; j >= 0; j--) {
      if (this.selectArray(j)[idx]) {
        if (this.selectArray(j)[idx] === 7 || this.selectArray(j)[idx] === 9) {
          return true
        }
        else j = -1;
      }
    }
    // check for the bishops/queens
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank+j)[idx+j]) {
        if (this.selectArray(rank+j)[idx+j] === 3 || this.selectArray(rank+j)[idx+j] === 9) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank+j)[idx-j]) {
        if (this.selectArray(rank+j)[idx-j] === 3 || this.selectArray(rank+j)[idx-j] === 9) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank-j)[idx+j]) {
        if (this.selectArray(rank-j)[idx+j] === 3 || this.selectArray(rank-j)[idx+j] === 9) {
          return true
        }
        else j = 9;
      }
    }
    for (let j = 1; j <= 8; j++) {
      if (this.selectArray(rank-j)[idx-j]) {
        if (this.selectArray(rank-j)[idx-j] === 3 || this.selectArray(rank-j)[idx-j] === 9) {
          return true
        }
        else j = 9;
      }
    }
    return false
  }

  allowMovement(e) {
    let array1 = this.selectArray(parseInt(this.state.selectedPiece.getAttribute("dataRank"), 10))
    let array2 = this.selectArray(parseInt(e.target.getAttribute("dataRank"), 10))
    array1.splice(this.state.selectedPiece.getAttribute("dataIndexnumber"), 1, 0)
    array2.splice(e.target.getAttribute("dataIndexnumber"), 1, parseInt(this.state.selectedPiece.getAttribute("dataValue"), 10))
    this.finishMove()
    this.findWhiteKing();
    this.findBlackKing();
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
    this.state.turnCounter === 1 ? this.setState({turnCounter: 2}) : this.setState({turnCounter: 1}); 
    console.log(this.state.turnCounter)
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
      default: return false
    }
  }

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
