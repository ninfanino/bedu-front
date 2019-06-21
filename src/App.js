import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Payment from './pages/payment'

function App() {
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

export default App;
