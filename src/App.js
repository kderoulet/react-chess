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
        turnCounter: 1,
    }
  }

  handleMovement = (e) => {
      if (this.state.selectedPiece) {
        if (parseInt(e.target.getAttribute("dataValue"), 10) < 100) {
          this.resolveMove();          
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
          default: break
      }
    }
  }

  checkMove(value, rank, index, moveRank, moveIndex) {
    rank.splice(index, 1, 0)
    let temp = moveRank.splice(moveIndex, 1, value)[0]
    if (value % 2 === 1) {
      if (this.findWhiteKing()) {
        rank.splice(index, 1, value)
        moveRank.splice(moveIndex, 1, temp)
        return false
      }
      else {
        rank.splice(index, 1, value)
        moveRank.splice(moveIndex, 1, temp)
        return true
      }
    } else {
      if (this.findBlackKing()) {
        rank.splice(index, 1, value)
        moveRank.splice(moveIndex, 1, temp)
        return false
      }
      else {
        rank.splice(index, 1, value)
        moveRank.splice(moveIndex, 1, temp)
        return true
      }
    }
  }

  whitePawnMove(piece) {
    let numMoves = 0
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)
    let rankArray = this.selectArray(currentRank)    
    let nextRank = this.selectArray(currentRank+1)
    let threatened1 = nextRank[currentIndex-1]
    let threatened2 = nextRank[currentIndex+1]
    if (threatened1 > 0 && threatened1 % 2 === 0) {
      if (this.checkMove(pieceValue, rankArray, currentIndex, nextRank, currentIndex-1)) {
        nextRank[currentIndex-1] += 100
        numMoves++
      }
    }
    if (threatened2 > 0 && threatened2 % 2 === 0) {
      if (this.checkMove(pieceValue, rankArray, currentIndex, nextRank, currentIndex+1)) {
        nextRank[currentIndex+1] += 100
        numMoves++        
      }
    }
    if (nextRank[currentIndex] === 0) {
      if (this.checkMove(pieceValue, rankArray, currentIndex, nextRank, currentIndex)) {
        nextRank[currentIndex] += 100
        numMoves++
      }
      if (currentRank === 2) {
        let doubleRank = this.selectArray(4)
        if (this.selectArray(4)[currentIndex] === 0) {
          if (this.checkMove(pieceValue, rankArray, currentIndex, doubleRank, currentIndex)) {
            this.selectArray(4)[currentIndex] += 100
            numMoves++
          }
        }
      } 
    }
    if (numMoves === 0) this.resolveMove();
  }

  blackPawnMove(piece) {
    let numMoves = 0
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)
    let rankArray = this.selectArray(currentRank)    
    let nextRank = this.selectArray(currentRank-1)
    let threatened1 = nextRank[currentIndex-1]
    let threatened2 = nextRank[currentIndex+1]
    if (threatened1 > 0 && threatened1 % 2 === 1) {
      if (this.checkMove(pieceValue, rankArray, currentIndex, nextRank, currentIndex-1)) {
        nextRank[currentIndex-1] += 100
        numMoves++
      }
    }
    if (threatened2 > 0 && threatened2 % 2 === 1) {
      if (this.checkMove(pieceValue, rankArray, currentIndex, nextRank, currentIndex+1)) {
        nextRank[currentIndex+1] += 100
        numMoves++        
      }
    }
    if (nextRank[currentIndex] === 0) {
      if (this.checkMove(pieceValue, rankArray, currentIndex, nextRank, currentIndex)) {
        nextRank[currentIndex] += 100
        numMoves++
      }
      if (currentRank === 7) {
        let doubleRank = this.selectArray(5)
        if (doubleRank[currentIndex] === 0) {
          if (this.checkMove(pieceValue, rankArray, currentIndex, doubleRank, currentIndex)) {
            this.selectArray(5)[currentIndex] += 100
            numMoves++  
          }
        }
      } 
    }
    if (numMoves === 0) this.resolveMove();
  }

  blackBishopMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)    
    this.scanDLBishopMove(pieceValue, currentRank, currentIndex, 1)
    this.scanDRBishopMove(pieceValue, currentRank, currentIndex, 1)
    this.scanULBishopMove(pieceValue, currentRank, currentIndex, 1)
    this.scanURBishopMove(pieceValue, currentRank, currentIndex, 1)
  }

  whiteBishopMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)    
    this.scanDLBishopMove(pieceValue, currentRank, currentIndex, 0)
    this.scanDRBishopMove(pieceValue, currentRank, currentIndex, 0)
    this.scanULBishopMove(pieceValue, currentRank, currentIndex, 0)
    this.scanURBishopMove(pieceValue, currentRank, currentIndex, 0)
  }

  scanDLBishopMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank-j)
      if (nextRank[idx-j] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx-j)) {
          nextRank[idx-j] += 100          
        }
      } 
      else if (nextRank[idx-j] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx-j)) {
          nextRank[idx-j] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  scanDRBishopMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank-j)
      if (nextRank[idx+j] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx+j)) {
          nextRank[idx+j] += 100          
        }
      } 
      else if (nextRank[idx+j] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx+j)) {
          nextRank[idx+j] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  scanULBishopMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank+j)
      if (nextRank[idx-j] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx-j)) {
          nextRank[idx-j] += 100          
        }
      } 
      else if (nextRank[idx-j] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx-j)) {
          nextRank[idx-j] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  scanURBishopMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank+j)
      if (nextRank[idx+j] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx+j)) {
          nextRank[idx+j] += 100          
        }
      } 
      else if (nextRank[idx+j] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx+j)) {
          nextRank[idx+j] += 100;
          j = 9;
        }
      }
      else j = 9;
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
      let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)
      let currentRank = this.selectArray(knightRank) 
      if (this.selectArray(knightRank+2)) {
        let upperRank = this.selectArray(knightRank+2)
        if (upperRank[currentIndex+1] === 0 || upperRank[currentIndex+1] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, upperRank, currentIndex+1)) {
            upperRank[currentIndex+1] += 100
          }
        }
        if (upperRank[currentIndex-1] === 0 || upperRank[currentIndex-1] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, upperRank, currentIndex-1)) {
            upperRank[currentIndex-1] += 100
          }
        }
      }
      if (this.selectArray(knightRank+1)) {
        let upperRank = this.selectArray(knightRank+1)
        if (upperRank[currentIndex+2] === 0 || upperRank[currentIndex+2] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, upperRank, currentIndex+2)) {
            upperRank[currentIndex+2] += 100
          }
        }
        if (upperRank[currentIndex-2] === 0 || upperRank[currentIndex-2] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, upperRank, currentIndex-2)) {
            upperRank[currentIndex-2] += 100
          }
        }
      }
      if (this.selectArray(knightRank-1)) {
        let lowerRank = this.selectArray(knightRank-1)
        if (lowerRank[currentIndex+2] === 0 || lowerRank[currentIndex+2] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, lowerRank, currentIndex+2)) {
            lowerRank[currentIndex+2] += 100
          }
        }
        if (lowerRank[currentIndex-2] === 0 || lowerRank[currentIndex-2] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, lowerRank, currentIndex-2)) {
            lowerRank[currentIndex-2] += 100      
          }
        }
      }
      if (this.selectArray(knightRank-2)) {
        let lowerRank = this.selectArray(knightRank-2)
        if (lowerRank[currentIndex+1] === 0 || lowerRank[currentIndex+1] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, lowerRank, currentIndex+1)) {
            lowerRank[currentIndex+1] += 100
          }
        }
        if (lowerRank[currentIndex-1] === 0 || lowerRank[currentIndex-1] % 2 === remainder) {
          if (this.checkMove(pieceValue, currentRank, currentIndex, lowerRank, currentIndex-1)) {
          lowerRank[currentIndex-1] += 100
          }
        }
      }
    }

  blackRookMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)            
    this.scanURookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanDRookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanLRookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanRRookMove(pieceValue, currentRank, currentIndex, 1)
  }
  whiteRookMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)            
    this.scanURookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanDRookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanLRookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanRRookMove(pieceValue, currentRank, currentIndex, 0)
  }

  scanURookMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank+j)
      if (nextRank[idx] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx)) {
          nextRank[idx] += 100          
        }
      } 
      else if (nextRank[idx] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx)) {
          nextRank[idx] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  scanDRookMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank-j)
      if (nextRank[idx] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx)) {
          nextRank[idx] += 100          
        }
      } 
      else if (nextRank[idx] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx)) {
          nextRank[idx] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  scanLRookMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank)
      if (nextRank[idx-j] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx-j)) {
          nextRank[idx-j] += 100          
        }
      } 
      else if (nextRank[idx-j] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx-j)) {
          nextRank[idx-j] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  scanRRookMove(value, rank, idx, remainder) {
    let currentRank = this.selectArray(rank)
    let nextRank = []
    for (let j = 1; j <= 8; j++) {
      nextRank = this.selectArray(rank)
      if (nextRank[idx+j] === 0) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx+j)) {
          nextRank[idx+j] += 100          
        }
      } 
      else if (nextRank[idx+j] % 2 === remainder) {
        if (this.checkMove(value, currentRank, idx, nextRank, idx+j)) {
          nextRank[idx+j] += 100;
          j = 9;
        }
      }
      else j = 9;
    }
  }

  
  
  blackQueenMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)        
    this.scanURookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanDRookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanLRookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanRRookMove(pieceValue, currentRank, currentIndex, 1)
    this.scanDLBishopMove(pieceValue, currentRank, currentIndex, 1)
    this.scanDRBishopMove(pieceValue, currentRank, currentIndex, 1)
    this.scanULBishopMove(pieceValue, currentRank, currentIndex, 1)
    this.scanURBishopMove(pieceValue, currentRank, currentIndex, 1)
  }

  whiteQueenMove(piece) {
    let currentRank = parseInt(piece.getAttribute("dataRank"), 10)
    let currentIndex = parseInt(piece.getAttribute("dataIndexnumber"), 10)
    let pieceValue = parseInt(piece.getAttribute("dataValue"), 10)            
    this.scanURookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanDRookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanLRookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanRRookMove(pieceValue, currentRank, currentIndex, 0)
    this.scanDLBishopMove(pieceValue, currentRank, currentIndex, 0)
    this.scanDRBishopMove(pieceValue, currentRank, currentIndex, 0)
    this.scanULBishopMove(pieceValue, currentRank, currentIndex, 0)
    this.scanURBishopMove(pieceValue, currentRank, currentIndex, 0)
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
      if (lowerRank[currentIndex-1] === 0 || lowerRank[currentIndex-1] % 2 === remainder) {
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
    return this.whiteKingInCheck(kingRank, kingIndex) ? true : false
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
    return this.blackKingInCheck(kingRank, kingIndex) ? true : false
  }     

  blackKingInCheck(rank, idx) {
    if (this.checkForBishops(rank, idx, 3, 9)) return true
    if (this.checkForBishops(rank, idx, 103, 109)) return true
    if (this.checkForRooks(rank, idx, 7, 9)) return true
    if (this.checkForRooks(rank, idx, 107, 109)) return true
    if (this.checkForWhitePawns(rank, idx)) return true
    if (this.checkForWhitePawns(rank, idx)) return true
    if (this.checkForKnights(rank, idx, 5)) return true
    if (this.checkForKnights(rank, idx, 105)) return true
    if (this.checkForKing(rank, idx, 11)) return true
    if (this.checkForKing(rank, idx, 111)) return true
    else return false
  }
    
  whiteKingInCheck(rank, idx) {
    if (this.checkForBishops(rank, idx, 4, 10)) return true
    if (this.checkForBishops(rank, idx, 104, 110)) return true
    if (this.checkForRooks(rank, idx, 8, 10)) return true
    if (this.checkForRooks(rank, idx, 108, 110)) return true
    if (this.checkForBlackPawns(rank, idx)) return true
    if (this.checkForKnights(rank, idx, 6)) return true
    if (this.checkForKnights(rank, idx, 106)) return true
    if (this.checkForKing(rank, idx, 12)) return true
    if (this.checkForKing(rank, idx, 112)) return true
    else return false    
  }

    checkForWhitePawns(rank, idx) {
      switch (1) {
        case this.selectArray(rank-1)[idx+1]: return true
        case this.selectArray(rank-1)[idx-1]: return true
        default: break
      } 
    }
    checkForBlackPawns(rank, idx) {
      switch (2) {
        case this.selectArray(rank+1)[idx+1]: return true
        case this.selectArray(rank+1)[idx-1]: return true
        default: break
      } 
    }
    // check for knights
    checkForKnights(rank, idx, pieceValue) {
      switch (pieceValue) {
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
  }
    checkForKing(rank, idx, pieceValue) {
    switch (pieceValue) {
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
  }
    checkForRooks(rank, idx, valOne, valTwo) {
      for (let j = idx-1; j >= 0; j--) {
        if (this.selectArray(rank)[j] && this.selectArray(rank)[j] !== 100) {
          if (this.selectArray(rank)[j] === valOne || this.selectArray(rank)[j] === valTwo) {
            return true
          }
          else j = -1;
        }
      }
      for (let j = idx+1; j <= 8; j++) {
        if (this.selectArray(rank)[j] && this.selectArray(rank)[j] !== 100) {
          if (this.selectArray(rank)[j] === valOne || this.selectArray(rank)[j] === valTwo) {
            return true
          }
          else j = 9;
        }
      }
      for (let j = rank+1; j <= 8; j++) {
        if (this.selectArray(j)[idx] && this.selectArray(j)[idx] !== 100) {
          if (this.selectArray(j)[idx] === valOne || this.selectArray(j)[idx] === valTwo) {
            return true
          }
          else j = 9;
        }
      }
      for (let j = rank-1; j >= 0; j--) {
        if (this.selectArray(j)[idx] && this.selectArray(j)[idx] !== 100) {
          if (this.selectArray(j)[idx] === valOne || this.selectArray(j)[idx] === valTwo) {
            return true
          }
          else j = -1;
        }
      }
    }

    checkForBishops(rank, idx, valOne, valTwo) {
      for (let j = 1; j <= 8; j++) {
        if (this.selectArray(rank+j)[idx+j] && this.selectArray(rank+j)[idx+j] !== 100) {
          if (this.selectArray(rank+j)[idx+j] === valOne || this.selectArray(rank+j)[idx+j] === valTwo) {
            return true
          }
          else j = 9;
        }
      }
      for (let j = 1; j <= 8; j++) {
        if (this.selectArray(rank+j)[idx-j] && this.selectArray(rank+j)[idx-j] !== 100) {
          if (this.selectArray(rank+j)[idx-j] === valOne || this.selectArray(rank+j)[idx-j] === valTwo) {
            return true
          }
          else j = 9;
        }
      }
      for (let j = 1; j <= 8; j++) {
        if (this.selectArray(rank-j)[idx+j] && this.selectArray(rank-j)[idx+j] !== 100) {
          if (this.selectArray(rank-j)[idx+j] === valOne || this.selectArray(rank-j)[idx+j] === valTwo) {
            return true
          }
          else j = 9;
        }
      }
      for (let j = 1; j <= 8; j++) {
        if (this.selectArray(rank-j)[idx-j] && this.selectArray(rank-j)[idx-j] !== 100) {
          if (this.selectArray(rank-j)[idx-j] === valOne || this.selectArray(rank-j)[idx-j] === valTwo) {
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
    this.resolveMove()
    this.state.turnCounter === 1 ? this.setState({turnCounter: 0}) : this.setState({turnCounter: 1}); 
    this.findWhiteKing();
    this.findBlackKing();
  }

  resolveMove = () => {
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
