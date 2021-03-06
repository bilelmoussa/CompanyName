import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './components/home';



class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
            <div id="content">
                <Switch>
                    <Route exact path='/' component={home} />
                </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
