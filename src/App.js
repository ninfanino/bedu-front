import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Payment from './pages/payment'

class App extends Component {
  render() { 
    return ( 
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/payment/" component={Payment} />
        </div>
      </Router>
    );
  }
}
 
export default App;
