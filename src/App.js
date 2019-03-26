import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './components/home';


const pagenotfound = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
            <div id="content">
                <Switch>
                    <Route exact path='/' component={home} />
                    <Route component={pagenotfound}/>
                </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
