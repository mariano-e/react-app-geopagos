import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import One from './pages/One.js';
import Two from './pages/Two.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/one" component={One}/>
        <Route exact path="/two" component={Two}/>
      </Switch>
    </Router>
  );
}

export default App;
