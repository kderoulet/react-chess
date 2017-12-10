import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing'
import Game from './pages/Game'

class App extends Component {
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
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
