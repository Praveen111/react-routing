import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

const App = () =>  <Router><div>
 <Link to="/">Home</Link>
   <Link to="/login">Login</Link>
   <hr />
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    
  </div></Router>
export default App;
